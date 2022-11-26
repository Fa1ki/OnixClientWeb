# What is Onix Client Scripting?

Scripting is an API built on Lua for Onix Client.
With scripting you can create your own CUSTOM modules for the client or use modules the community has already made.

You can find most public scripts on our [GitHub Repository](https://github.com/OnixClient-Scripts/OnixClient_Scripts).

You can get access to scripting by purchasing any supporter tier at our [patreon page](https://onixclient.com/patreon).

## Prerequisites

You should know the basics of the Lua scripting language.
Onix Client Scripting uses lua 5.4.
[The documentation for lua 5.4 can be found here.](https://www.lua.org/manual/5.4/manual.html)
[Here is a video series on how to learn lua.](https://youtu.be/bpe6I_flMfo)

You will also require the Onix Client Scripting DLL.
You can get the Scripting DLL by doing ``/download scripting:True`` or ``!scripting`` within the Onix Client discord server.

[! Here is the guide in video form. !](https://youtu.be/8jy_jE-MSoo)

## Setting up

You will need a text editor, for this we strongly recommend Visual Studio Code.
Visual Studio Code has good syntax highlighting and allows us to create a customised autocomplete for Onix Client Scripting utilising it.
[The download for Visual Studio Code can be found here.](https://code.visualstudio.com/)

### Getting the lua extension

Once you have Visual Studio Code, go to the Extensions tab.
In the search box, search "lua".
Choose the one made by "sumneko", (it should be the first one).
Click on install

## Getting the autocomplete

(This part can be hard to understand, so please refer to the [video guide](https://youtu.be/8jy_jE-MSoo) if you get confused.)

1. [Go to the Onix Client Scripting Repository.](https://github.com/OnixClient-Scripts/OnixClient_Scripts)
2. Click on the green "Code" button.
3. Click on "Download ZIP".
4. Press the Windows Key + R on your keyboard.
When the \`Run` box opens, paste the following:

`%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\RoamingState\OnixClient`
If you do not see a folder called "Scripts" in the folder that opens, create one.
6. Extract the "AutoComplete" folder from the zip file you downloaded earlier into the Scripts folder.
(You can also extract entire file if you want the mods made by the community.)
(I would also recommend getting the "Libs" folder aswell)
7. In visual studio code go to File-> Preferences-> Settings, then Extensions-> Lua
8. Scroll down to: "Workspace: User Third Party" (Should be roughly the last setting in the lua extension.)
9. Click on "Add Item"
10. Paste in the following:
`%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\RoamingState\OnixClient\Scripts\AutoComplete`

You now have the autocomplete, congrats!
You can now close the settings tab.

## Workspace

Go back to the OnixClient folder.

`%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\RoamingState\OnixClient\Scripts\AutoComplete`
Now drag the "Scripts" folder into Visual Studio Code.

#### Now that we have everything set up, we can create a command/module.

But before that make sure in the global scope you dont do things related to the game
Example: x,y,z = player.position(), this will crash the game. do it in postInit or in a safe function

## Creating a Command

To create a command, right click on the "Commands" folder and click on "New File"
You can name the file whatever you want, but you generally
wana give it the name of the command or close enough to it.
Command layout,
Every command must start like this

```lua
command = "Example"
help_message = "This is an Example help message"
```

the "command" variable defines what the user will need to type in chat to execute your command.
it cannot have spaces, you should avoid special characters aswell.
do not include the prefix ( "." ) in the command.

the "description" variable defines the message that will show in .help
try to not make it too long if possible, it can contain about anything
if you decide to use color codes make sure to reset them (�r) at the end

### Doing something when the command is executed

For this we simply define the function "execute"
everything after the name is in arguments
(ex: .test among) would mean the "arguments" would be "among"

```lua
function execute(arguments)
    print("Hello world!")
end
```

## Creating a Module

To create a module, right click on the "Modules" folder and click on "New File"
You can name the file whatever you want, but you generally
wana give it the name of the command or close enough to it.
Module layout,
Every module must start like this

```lua
name = "Example"
description = "This is an Example description"
```

he "name" variable defines what name in the ui your mod will hve.
it can have spaces but you should avoid special characters.

the "description" variable defines the what will show below the module name in the ui
do not use color codes on those description


#### Doing something with the module
There are multiple functions you can define that will be called,
the rest are using event.listen
Here is a list of the functions

## The update function

Used to calculate slower things, it is called ~10 times per seconds.
The "dt" argument is the amount of seconds since the last time this function got called 

```lua
function update(dt)

end
```

## The render2 function

Used to render things to the screen using gfx2 (v3 renderer).
Note that some things from the game might be unstable or cause crashes if used in render2
This is a good use for update, get the information in update and use it in render2

The "dt" argument is the amount of seconds since the last time this function got called

```lua
function render2(dt)

end
```

## The render3d function

Used to render things in the world using gfx.
The "dt" argument is the amount of seconds since the last time this function got called

## The render3d function

Used to render things in the world using gfx.
The "dt" argument is the amount of seconds since the last time this function got called

```lua
function render3d(dt)

end
```

## The postInit function

Used to do things after initialization, this function is safe to run game things in

```lua
function postInit()

end
```

## The onDisable function

Used to do cleanup or whatever you need to do when your module is disabled

```lua
function onDisable()

end
```

## The onEnable function

Used to do something when your module just got enabled

```lua
function onEnable()

end
```