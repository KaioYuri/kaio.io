import { CalendarDays } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

interface HoverCardProps {
  avatar: string;
  arroba: string;
  descricao: string;
  data: string;
}

export function HoverCardFollow({
  avatar,
  arroba,
  descricao,
  data,
}: HoverCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button className="p-0" variant="link">
          @{arroba}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-black text-left inline-block">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@{arroba}</h4>
            <p className="text-sm">{descricao}</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{' '}
              <span className="text-xs text-muted-foreground">{data}</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
