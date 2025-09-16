import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Crown } from "lucide-react";
import reinoLogo from "@/assets/reino-logo.png";

interface LoginFormProps {
  onLogin: () => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Temporário até conectar Supabase
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-mystic border-0 bg-card/90 backdrop-blur">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <img src={reinoLogo} alt="Reino das Almas" className="w-16 h-16" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-foreground">Reino das Almas</CardTitle>
            <p className="text-muted-foreground">Sistema de Gestão de Estoque</p>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            <Button type="submit" variant="hero" className="w-full">
              <Crown className="w-4 h-4 mr-2" />
              Entrar no Sistema
            </Button>
          </form>
          
          <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <p className="text-sm text-center text-muted-foreground">
              🔒 <strong>Demonstração:</strong> Use qualquer email/senha para testar.
              Para funcionalidade completa, conecte ao Supabase.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}