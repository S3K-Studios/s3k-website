import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { HeroUIProvider, useDisclosure } from "@heroui/react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import BlogPage from "./pages/BlogPage";
import AboutUsPage from "./pages/AboutUsPage";
import LoadingScreen from "./components/LoadingScreen";
import NavigationDrawer from "./components/NavigationDrawer";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { DataProvider } from "./context/DataContext";

const GameDetailPage = lazy(() => import("./pages/GameDetailPage"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const LegalPage = lazy(() => import("./pages/legal/LegalPage"));
const LegalIndexPage = lazy(() => import("./pages/legal/LegalIndexPage"));

const App: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HeroUIProvider>
      <DataProvider>
        <Router>
          <Suspense fallback={<LoadingScreen />}>
            <Switch>
              {/* Admin Rotası - Header ve Footer olmadan */}
              <Route exact component={AdminLogin} path="/admin/login" />
              <ProtectedRoute component={AdminDashboard} path="/admin" />

              {/* Public Layout */}
              <Route path="/">
                <div className="flex flex-col min-h-screen">
                  <Header onOpen={onOpen} />
                  <main className="flex-grow">
                    <Switch>
                      <Route exact component={LandingPage} path="/" />
                      <Route component={BlogDetailPage} path="/blog/:id" />
                      <Route component={BlogPage} path="/blog" />
                      <Route component={AboutUsPage} path="/about" />
                      <Route component={GameDetailPage} path="/games/:id" />
                      <Route exact component={LegalIndexPage} path="/legal" />
                      <Route
                        component={LegalPage}
                        path="/legal/:appSlug/:doc"
                      />

                      {/* Legacy Atomic Boom URLs — kept working, redirect to the new per-app routes */}
                      <Redirect
                        from="/atomicboom/privacy"
                        to="/legal/atomic-boom/privacy"
                      />
                      <Redirect
                        from="/atomicboom/terms"
                        to="/legal/atomic-boom/terms"
                      />
                      <Redirect
                        from="/atomicboom/data-deletion"
                        to="/legal/atomic-boom/data-deletion"
                      />
                    </Switch>
                  </main>
                  <Footer />
                  <NavigationDrawer isOpen={isOpen} onClose={onClose} />
                </div>
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </DataProvider>
    </HeroUIProvider>
  );
};

export default App;
