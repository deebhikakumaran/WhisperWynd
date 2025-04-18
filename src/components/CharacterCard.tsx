import { BookOpen, Edit, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface CharacterCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  createdAt: Date;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onView?: (id: string) => void;
}

const CharacterCard = ({
  id,
  name,
  description,
  imageUrl,
  createdAt,
  onEdit,
  onDelete,
  onView,
}: CharacterCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md border-whisperwynd-gray h-full flex flex-col">
      {imageUrl ? (
        <div 
          className="w-full h-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      ) : (
        <div className="w-full h-40 bg-whisperwynd-light-purple flex items-center justify-center">
          <BookOpen className="h-12 w-12 text-whisperwynd-purple opacity-50" />
        </div>
      )}
      
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-serif">{name}</CardTitle>
        <CardDescription>
          Created on {createdAt.toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-sm text-whisperwynd-medium-gray line-clamp-3">
          {description}
        </p>
      </CardContent>
      
      <CardFooter className="pt-2 flex justify-between">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onView?.(id)}
          className="text-xs"
        >
          <BookOpen className="h-3.5 w-3.5 mr-1" />
          View
        </Button>
        
        <div className="flex space-x-2">
          {onEdit && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => onEdit(id)}
              className="text-xs"
            >
              <Edit className="h-3.5 w-3.5" />
              <span className="sr-only">Edit</span>
            </Button>
          )}
          
          {onDelete && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => onDelete(id)}
              className="text-xs text-destructive hover:text-destructive/90"
            >
              <Trash className="h-3.5 w-3.5" />
              <span className="sr-only">Delete</span>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CharacterCard;