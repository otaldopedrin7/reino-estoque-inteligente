import { useState } from "react";
import { Layout } from "@/components/Layout";
import { LoginForm } from "@/components/LoginForm";
import { Dashboard } from "@/components/Dashboard";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");

  if (!isAuthenticated) {
    return <LoginForm onLogin={() => setIsAuthenticated(true)} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "products":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Produtos</h1>
            <p className="text-muted-foreground">Em breve: CRUD completo de produtos com filtros avançados</p>
          </div>
        );
      case "users":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Usuários</h1>
            <p className="text-muted-foreground">Em breve: Gestão de usuários e permissões</p>
          </div>
        );
      case "settings":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Configurações</h1>
            <p className="text-muted-foreground">Em breve: Configurações de margem, alertas e sistema</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
};

export default Index;