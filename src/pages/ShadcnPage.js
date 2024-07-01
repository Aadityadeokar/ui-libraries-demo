import React from 'react';
import { ThemeProvider } from "@/components/theme-provider"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuSeparator,
} from "@/components/ui/context-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function ShadcnPage() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">shadcn/ui Components</h1>

        {/* Context Menu */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Context Menu</h2>
          <p className="text-gray-600 mb-4">A context menu component that appears on right-click, providing additional options.</p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm bg-gray-100 cursor-context-menu">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64 bg-white">
                <ContextMenuItem>Profile</ContextMenuItem>
                <ContextMenuItem>Billing</ContextMenuItem>
                <ContextMenuItem>Team</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48 bg-white">
                    <ContextMenuItem>Save Page As...</ContextMenuItem>
                    <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                    <ContextMenuItem>Name Window...</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Developer Tools</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </section>

        {/* Custom Context Menu */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Custom Context Menu</h2>
          <p className="text-gray-600 mb-4">A customized context menu with a unique design and color scheme.</p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md bg-gradient-to-r from-purple-400 to-pink-500 text-white text-sm cursor-context-menu">
                Right click for options
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64 bg-white">
                <ContextMenuItem>Edit</ContextMenuItem>
                <ContextMenuItem>Duplicate</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48 bg-white">
                    <ContextMenuItem>Email Link</ContextMenuItem>
                    <ContextMenuItem>Copy Link</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuItem className="text-red-500">Delete</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </section>

        {/* Popover */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Popover</h2>
          <p className="text-gray-600 mb-4">A popover component that displays additional content when triggered.</p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-white">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Dimensions</h4>
                    <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="width">Width</Label>
                      <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="maxWidth">Max. width</Label>
                      <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </section>

        {/* Custom Popover */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Custom Popover</h2>
          <p className="text-black-600 mb-4">A customized popover with a unique design for user profiles.</p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Popover>
              <PopoverTrigger asChild>
                <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white">
                  User Profile
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-gray-100 dark:bg-gray-800">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">John Doe</h4>
                    <p className="text-sm text-muted-foreground">Web Developer</p>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-4">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" defaultValue="john.doe@example.com" className="h-8" readOnly />
                    </div>
                    <div className="flex items-center gap-4">
                      <Label htmlFor="role">Role</Label>
                      <Input id="role" defaultValue="Admin" className="h-8" readOnly />
                    </div>
                  </div>
                  <Button className="w-full">Edit Profile</Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </section>

        {/* Card */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Card</h2>
          <p className="text-gray-600 mb-4">A versatile card component for displaying content in a contained format.</p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Name of your project" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="framework">Framework</Label>
                      <select id="framework" className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="next">Next.js</option>
                        <option value="sveltekit">SvelteKit</option>
                        <option value="astro">Astro</option>
                        <option value="nuxt">Nuxt.js</option>
                      </select>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Custom Card */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Custom Card</h2>
          <p className="text-red-600 mb-4">A customized card component with a unique design for subscription plans.</p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Card className="w-[350px] bg-gradient-to-br from-yellow-500 to-blue-500 text-black">
              <CardHeader>
                <CardTitle>Subscribe to Pro</CardTitle>
                <CardDescription className="text-purple-100">Get access to exclusive features</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Unlimited projects</li>
                  <li>Advanced analytics</li>
                  <li>Priority support</li>
                  <li>Custom branding</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-cyan-500">Learn More</Button>
                <Button className="bg-white text-purple-500 hover:bg-purple-100">Subscribe</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default ShadcnPage;
