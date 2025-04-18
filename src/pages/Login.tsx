import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, EyeOff, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    // This would be replaced with actual API call in a real implementation
    setTimeout(() => {
      setIsLoading(false);
      
      // Demo credentials for easy testing
      if (email === 'user@example.com' && password === 'password') {
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-whisperwynd-gray px-4 py-12">
      {/* Decorative elements */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-whisperwynd-light-purple via-whisperwynd-purple to-whisperwynd-blue"></div>
      <div className="absolute top-10 left-10">
        <Link to="/" className="flex items-center text-whisperwynd-dark-gray hover:text-whisperwynd-purple transition-colors">
          <BookOpen className="h-8 w-auto text-whisperwynd-purple" />
          <span className="ml-2 text-xl font-serif font-medium">WhisperWynd</span>
        </Link>
      </div>
      
      <Card className="w-full max-w-md shadow-lg border-whisperwynd-gray">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-serif text-center">Welcome Back</CardTitle>
          <CardDescription className="text-center">
            Sign in to continue your storytelling journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link 
                  to="/forgot-password" 
                  className="text-xs text-whisperwynd-purple hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-whisperwynd-medium-gray hover:text-whisperwynd-dark-gray"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remember" 
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <Label htmlFor="remember" className="text-sm font-normal">
                Remember me for 30 days
              </Label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-whisperwynd-purple hover:bg-whisperwynd-purple/90"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          
          
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-whisperwynd-medium-gray">
            Don't have an account?{' '}
            <Link to="/register" className="text-whisperwynd-purple hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
      
      {/* Demo credentials hint */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="text-xs text-whisperwynd-medium-gray">
          <span className="font-semibold">Demo credentials:</span> user@example.com / password
        </p>
      </div>
    </div>
  );
};

export default Login;