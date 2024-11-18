// src/pages/_app.tsx

// Importa o CartProvider para gerenciar o contexto do carrinho em toda a aplicação
import { CartProvider } from '@/context/cartcontext';
// Importa os tipos necessários para o componente de app do Next.js
import type { AppProps } from 'next/app';
// Importa o arquivo global de estilos
import '@/styles/globals.css';

// Componente principal da aplicação Next.js
function MyApp({ Component, pageProps }: AppProps) {
  // Envolve o componente principal com o CartProvider para fornecer o contexto global
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

// Exporta o componente principal da aplicação
export default MyApp;
