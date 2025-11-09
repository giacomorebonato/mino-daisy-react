# mino-daisy-react

This project wraps [DaisyUI](https://daisyui.com/) components into React.

## Details

* uses Vite to build a library
* has a Storybook to visualize preview of components
* uses [clsx](https://www.npmjs.com/package/clsx) for conditionally render CSS classes
* exports all components from its root ex: `import { Card } from 'mino-daisy-react`
* it's published to NPM for easy re-use
* uses TypeScript
* read updated [DaisyUI documentation](https://daisyui.com/llms.txt)

## Available Components

### Navigation & Layout (7/7) ✅
* `Navbar`, `NavbarStart`, `NavbarCenter`, `NavbarEnd` - Top navigation bar with sections
* `Breadcrumbs` - Navigation helper showing page hierarchy
* `Menu` - Vertical or horizontal link lists
* `Pagination` - Button group for page navigation
* `Dock`, `DockItem` - Bottom navigation bar (floating)
* `Drawer`, `DrawerToggle`, `DrawerContent`, `DrawerSide`, `DrawerOverlay` - Sidebar layout with toggle capability
* `Footer`, `FooterTitle` - Page footer with structured content

### Data Display (10/10) ✅
* `Table` - Structured data grid with zebra, pinned rows/columns
* `Card`, `CardBody`, `CardTitle`, `CardActions` - Content container
* `Badge` - Status indicator with variants and sizes
* `Stats`, `Stat`, `StatTitle`, `StatValue`, `StatDesc`, `StatFigure` - Numerical data blocks
* `Progress` - Task completion indicator
* `RadialProgress` - Circular progress display
* `Countdown` - Animated number transitions
* `Timeline`, `TimelineItem`, `TimelineStart`, `TimelineMiddle`, `TimelineEnd`, `TimelineBox` - Chronological event display
* `Steps`, `Step` - Process progression indicator
* `List`, `ListRow` - Vertical information layout

### Interactive & Feedback (12/12) ✅
* `Button` - Action trigger with variants, sizes, and states
* `Alert` - Important message notification
* `Modal`, `ModalBox`, `ModalAction`, `ModalBackdrop` - Dialog box overlay
* `Dropdown` - Click-triggered menu
* `Tab`, `Tabs`, `TabContent` - Tabbed content switcher
* `Collapse`, `CollapseTitle`, `CollapseContent`, `CollapseCheckbox` - Expandable content section
* `Accordion`, `AccordionItem`, `AccordionTitle`, `AccordionContent`, `AccordionRadio` - Single-open collapse group
* `Toast` - Corner notification stack
* `Tooltip`, `TooltipContent` - Hover info display
* `Rating`, `RatingItem` - Star-based rating input
* `Swap`, `SwapOn`, `SwapOff`, `SwapIndeterminate` - Toggle between two elements
* `Filter`, `FilterReset`, `FilterItem` - Radio button option filter

### Visual & Media (10/10) ✅
* `Avatar`, `AvatarGroup` - User thumbnail with online/offline status
* `Carousel`, `CarouselItem` - Scrollable content slider
* `Chat`, `ChatImage`, `ChatHeader`, `ChatFooter`, `ChatBubble` - Message bubble display
* `Diff`, `DiffItem`, `DiffResizer` - Side-by-side comparison
* `Divider` - Content separator with text
* `HoverGallery` - Image preview on hover
* `Indicator`, `IndicatorItem` - Corner element positioning
* `Mask` - Shape cropping for images
* `Stack` - Layered element positioning
* `Status` - Small status icon

### Mockups & Prototyping (4/4) ✅
* `MockupBrowser`, `MockupBrowserToolbar` - Browser window frame
* `MockupPhone`, `MockupPhoneCamera`, `MockupPhoneDisplay` - iPhone device frame
* `MockupCode` - Code editor appearance
* `MockupWindow` - OS window frame

### Forms & Input (10/10) ✅
* `Input` - Text entry field with variants and sizes
* `Textarea` - Multi-line text entry
* `Select` - Dropdown option picker with optgroup support
* `Checkbox` - Toggle selection element
* `Radio` - Single-choice option groups
* `Toggle` - Switch-style checkbox
* `Range` - Slider for value selection
* `FileInput` - File upload field
* `Fieldset`, `FieldsetLegend` - Form section grouping
* `Label` - Form field labeling (regular and floating)

### Utilities & Special (10/10) ✅
* `Loading` - Activity animation with 6 type variants
* `Skeleton` - Loading placeholder for content
* `Kbd` - Keyboard shortcut display
* `Calendar` - Date picker with React Day Picker integration and DaisyUI styling
* `Link` - Enhanced anchor styling with color variants
* `Join` - Item grouping container (horizontal/vertical)
* `Hero`, `HeroContent`, `HeroOverlay` - Large banner section
* `Fab`, `FabMainAction`, `FabClose` - Floating action button with speed dial
* `Validator`, `ValidatorHint` - Form validation styling with HTML5 support
* `ThemeController` - Theme switching control (checkbox, toggle, or swap)

## Usage Example

```tsx
import {
  Button,
  Input,
  Select,
  Checkbox,
  Toggle,
  Label
} from 'mino-daisy-react'

function MyForm() {
  return (
    <div>
      <Label>
        <span className="label">Email</span>
        <Input
          type="email"
          variant="primary"
          placeholder="you@example.com"
        />
      </Label>

      <Label>
        <span className="label">Country</span>
        <Select variant="primary">
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </Select>
      </Label>

      <Label className="flex items-center gap-2">
        <Toggle variant="primary" />
        <span>Enable notifications</span>
      </Label>

      <Button variant="primary" size="lg">
        Submit
      </Button>
    </div>
  )
}
```

## Component Implementation Status

### Navigation & Layout

- [x] Navbar - Top navigation bar
- [x] Breadcrumbs - Navigation helper showing page hierarchy
- [x] Menu - Vertical or horizontal link lists
- [x] Pagination - Button group for page navigation
- [x] Dock - Bottom navigation bar (floating)
- [x] Drawer - Sidebar layout with toggle capability
- [x] Footer - Page footer with structured content

### Forms & Input

- [x] Input - Text entry field
- [x] Textarea - Multi-line text entry
- [x] Select - Dropdown option picker
- [x] Checkbox - Toggle selection element
- [x] Radio - Single-choice option group
- [x] Toggle - Switch-style checkbox
- [x] Range - Slider for value selection
- [x] File-Input - File upload field
- [x] Fieldset - Form section grouping
- [x] Label - Input field labeling

### Data Display

- [x] Table - Structured data grid
- [x] Card - Content container
- [x] Badge - Status indicator
- [x] Stat - Numerical data block
- [x] Progress - Task completion indicator
- [x] Radial-Progress - Circular progress display
- [x] Countdown - Animated number transitions
- [x] Timeline - Chronological event display
- [x] Steps - Process progression indicator
- [x] List - Vertical information layout

### Interactive & Feedback

- [x] Button - Action trigger
- [x] Alert - Important message notification
- [x] Modal - Dialog box overlay
- [x] Dropdown - Click-triggered menu
- [x] Tab - Tabbed content switcher
- [x] Collapse - Expandable content section
- [x] Accordion - Single-open collapse group
- [x] Toast - Corner notification stack
- [x] Tooltip - Hover info display
- [x] Rating - Star-based rating input
- [x] Swap - Toggle between two elements
- [x] Filter - Radio button option filter

### Visual & Media

- [x] Avatar - User thumbnail image
- [x] Carousel - Scrollable content slider
- [x] Chat - Message bubble display
- [x] Diff - Side-by-side comparison
- [x] Divider - Content separator
- [x] Hover-Gallery - Image preview on hover
- [x] Indicator - Corner element placement
- [x] Mask - Shape cropping element
- [x] Stack - Layered element positioning
- [x] Status - Small status icon

### Mockups & Prototyping

- [x] Mockup-Browser - Browser window frame
- [x] Mockup-Phone - iPhone device frame
- [x] Mockup-Code - Code editor appearance
- [x] Mockup-Window - OS window frame

### Utilities & Special

- [x] Loading - Activity animation
- [x] Skeleton - Loading placeholder
- [x] Kbd - Keyboard shortcut display
- [x] Calendar - Date picker integration
- [x] Link - Enhanced anchor styling
- [x] Validator - Form validation styling
- [x] Theme-Controller - Theme switching control
- [x] Join - Item grouping container
- [x] Hero - Large banner section
- [x] FAB - Floating action button (includes Speed Dial)

### Progress

63/79 components implemented (79.7%)
