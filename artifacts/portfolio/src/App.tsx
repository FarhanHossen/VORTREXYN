/**
 * App.tsx — Root application component.
 *
 * Manages two top-level states:
 *  1. SplashScreen — shown on first load; the animated VORTREXYN logo
 *     plays its full sequence (~3.6s) before calling onDone().
 *  2. Main portfolio — the full single-page portfolio (Navbar + Home page)
 *     revealed after the splash exits.
 *
 * The transition between splash and main is handled inside SplashScreen
 * via its own exit animation (scale-up + blur + fade-to-black), so the
 * main content simply appears underneath without any extra wrapper animation.
 */

import { useState } from 'react';
import { Switch, Route, Router as WouterRouter } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Home from '@/pages/home';
import { SplashScreen } from '@/components/SplashScreen';

const queryClient = new QueryClient();

/** Page router — maps URL paths to page components. */
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  /**
   * splashDone — becomes true when SplashScreen calls onDone().
   * Once true, the SplashScreen is unmounted and the main app is shown.
   * Starts as false so the splash always plays on first load.
   */
  const [splashDone, setSplashDone] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Show splash screen until its animation completes */}
        {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}

        {/* Main portfolio — rendered immediately but hidden behind the
            splash overlay. Becomes visible once splashDone flips true
            and SplashScreen unmounts from the DOM.                    */}
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>

        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
