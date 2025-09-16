import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Crown, UserPlus } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import reinoLogo from "@/assets/reino-logo.png";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await signUp(email, password, fullName);
        if (error) {
          toast.error(error.message);
        } else {
          toast.success("Conta criada com sucesso! Verifique seu email.");
        }
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          toast.error("Email ou senha incorretos");
        } else {
          toast.success("Login realizado com sucesso!");
        }
      }
    } catch (error) {
      toast.error("Erro inesperado. Tente novamente.");
    } finally {
      setLoading(false);
    }
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
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="fullName">Nome Completo</Label>
                <Input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Seu nome completo"
                  required={isSignUp}
                />
              </div>
            )}
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
            <Button type="submit" variant="hero" className="w-full" disabled={loading}>
              {isSignUp ? (
                <>
                  <UserPlus className="w-4 h-4 mr-2" />
                  {loading ? "Criando conta..." : "Criar Conta"}
                </>
              ) : (
                <>
                  <Crown className="w-4 h-4 mr-2" />
                  {loading ? "Entrando..." : "Entrar no Sistema"}
                </>
              )}
            </Button>
          </form>
          
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              {isSignUp ? "Já tem uma conta? Fazer login" : "Não tem conta? Criar uma"}
            </button>
          </div>
          
          <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <p className="text-sm text-center text-muted-foreground">
              🔒 Sistema conectado ao Supabase com autenticação real.
              {isSignUp ? " Crie sua conta para acessar o sistema." : " Use suas credenciais para entrar."}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}