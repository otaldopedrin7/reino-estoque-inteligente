import { Package, TrendingUp, AlertTriangle, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const mockStats = {
  totalProducts: 342,
  totalValue: 125430.50,
  lowStock: 12,
  lastUpdate: "Há 2 minutos"
};

const mockRecentProducts = [
  { id: 1, name: "Cristal Ametista", quantity: 5, status: "low" },
  { id: 2, name: "Vela Aromática Lavanda", quantity: 25, status: "normal" },
  { id: 3, name: "Incenso Palo Santo", quantity: 2, status: "critical" },
  { id: 4, name: "Pedra da Lua", quantity: 18, status: "normal" },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Visão geral do seu estoque</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Última atualização</p>
          <p className="text-sm font-medium">{mockStats.lastUpdate}</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-primary border-0 shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary-foreground">
              Total de Produtos
            </CardTitle>
            <Package className="h-4 w-4 text-primary-foreground/80" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary-foreground">
              {mockStats.totalProducts}
            </div>
            <p className="text-xs text-primary-foreground/70">
              +12% em relação ao mês passado
            </p>
          </CardContent>
        </Card>

        <Card className="border-success/20 bg-success/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Valor Total
            </CardTitle>
            <DollarSign className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">
              R$ {mockStats.totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-muted-foreground">
              +8% em relação ao mês passado
            </p>
          </CardContent>
        </Card>

        <Card className="border-warning/20 bg-warning/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Estoque Baixo
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">
              {mockStats.lowStock}
            </div>
            <p className="text-xs text-muted-foreground">
              Produtos precisam reposição
            </p>
          </CardContent>
        </Card>

        <Card className="border-accent/20 bg-accent/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Vendas Hoje
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">
              R$ 2.840,00
            </div>
            <p className="text-xs text-muted-foreground">
              +23% comparado a ontem
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Produtos com Estoque Baixo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockRecentProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Quantidade: {product.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${
                      product.status === 'critical' ? 'bg-destructive' :
                      product.status === 'low' ? 'bg-warning' : 'bg-success'
                    }`} />
                    <Button size="sm" variant="outline">
                      Repor
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button variant="hero" className="w-full">
                Cadastrar Produto
              </Button>
              <Button variant="outline" className="w-full">
                Registrar Venda
              </Button>
              <Button variant="outline" className="w-full">
                Gerar Relatório
              </Button>
              <Button variant="outline" className="w-full">
                Configurar Alertas
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}