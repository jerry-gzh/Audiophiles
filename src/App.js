import AllRoutes from "./routes/index";
import { AuthProvider } from "./context/authContext"; //Los componentes dentro de AuthProvider tendrán acceso al user
import { ItemProvider } from "./context/itemContext";
import { CartProvider } from "./context/cartContext";

import "./App.scss";

// classname= bg-slate-300 h-screen text-black flex
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <ItemProvider>
            <AllRoutes />
          </ItemProvider>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
