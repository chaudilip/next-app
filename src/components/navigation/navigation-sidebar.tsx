import { UserButton } from "@clerk/nextjs"
import { ModeToggle } from "@/components/common/toggler/mode-toggle"
import { NavigationHeader } from "@/components/navigation/navigation-header"
import { Separator } from "@/components/ui/separator"


export const NavigationSidebar = async () => {
    return (
        <div className="space-y-2 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3">
            <NavigationHeader />
            <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
            <div>

            </div>
            <div className="flex flex-col justify-end h-full">
                <div className="py-3 flex flex-col mt-auto justify-end h-full gap-[8px] items-center ">
                    <ModeToggle />
                    <UserButton afterSignOutUrl="/" appearance={{
                        elements: {
                            avatarBox: "h-[32px] w-[32px]"
                        }
                    }} />
                </div>
            </div>
        </div>
    )
}