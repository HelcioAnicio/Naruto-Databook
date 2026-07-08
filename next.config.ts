import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // ou 'http', se não usar SSL
        hostname: "static.wikia.nocookie.net", // substitua pelo domínio da sua API
        port: "", // deixe vazio caso não use porta específica
        pathname: "/**", // permite qualquer imagem após o domínio
      },
    ],
  },
};

export default nextConfig;
