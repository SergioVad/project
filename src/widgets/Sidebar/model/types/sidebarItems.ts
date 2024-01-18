import React, { SVGProps } from 'react';

export interface SidebarItemInterface {
    path: string;
    name: string;
    Icon: React.FC<SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}
