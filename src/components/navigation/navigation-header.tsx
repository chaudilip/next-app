"use client";

import { sidebarConfig } from "@/constants/navbar-headers/icons-config"
import { ISidebarHeaderItem } from "@/types/sidebar-type/sidebar-header-type";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Link as LinkIcon, MapPin, Megaphone, Menu } from "lucide-react";
import { navigationButtonStyles } from "@/constants/styles-variables/header-style"
import React, { JSX } from "react";
import Link from "next/link";

const icons = { Menu, Megaphone, MapPin, Link: LinkIcon }

const iconMap: Record<string, (props?: React.ComponentProps<typeof Menu>) => JSX.Element> =
    Object.fromEntries(
        Object.entries(icons).map(([key, Icon]) => [
            key,
            (props) => <Icon
                size={navigationButtonStyles.headerButton.size}
                className={navigationButtonStyles.headerButton.className}
                {...props}
            />
        ])
    );


export const NavigationHeader = () => {
    return (
        <div className="flex flex-col">
            {sidebarConfig.map((item: ISidebarHeaderItem) => {
                if (!item?.name) return null;
                const IconComponent = iconMap[item?.icon] ?? iconMap["Menu"]
                return (
                    <div key={item.name} className="pb-[0px] pt-[2px]">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 border-input  hover:bg-accent hover:text-accent-foreground p-2">
                                        <Link
                                            href={item.path ?? "#"}
                                            className="text-gray-700/[0.8] dark:text-gray-300">
                                            {IconComponent()}
                                        </Link>
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    <div className="flex justify-between items-center">
                                        <span> {item.name} </span>
                                        {item.shortcut && (
                                            <kbd className="ml-2 px-2 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 rounded">
                                                {item.shortcut}
                                            </kbd>
                                        )}
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                )
            })}
        </div>
    )
}