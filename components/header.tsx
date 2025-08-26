import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl bg-gradient-to-r from-cyan-500 to-amber-500 bg-clip-text text-transparent">
            ImgXpress
          </span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Converters</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/jpg-to-png"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">JPG to PNG</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Convert JPG images to PNG format
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/png-to-jpg"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">PNG to JPG</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Convert PNG images to JPG format
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/webp-converter"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">WebP Converter</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Convert to/from WebP format
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/pdf-converter"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">PDF Converter</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Convert images to PDF format
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
