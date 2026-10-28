export interface ComponentDoc {
  name: string;
  category:
    | "layout"
    | "typography"
    | "form"
    | "feedback"
    | "data"
    | "action"
    | "media"
    | "overlay";
  description: string;
  keywords: string[];
  props: string[];
  example: string;
}

export const components: ComponentDoc[] = [
  {
    name: "Box",
    category: "layout",
    description:
      "Base container rendered as a View on native and a div on web. Accepts NativeWind className for layout, spacing, and colors.",
    keywords: ["container", "card", "wrapper", "view", "section", "layout"],
    props: ["className", "style", "bg-*", "p-* / px-* / py-*", "m-*", "rounded-*", "border-*", "shadow-*"],
    example: `import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";

<Box className="bg-card p-4 rounded-xl border border-border shadow-hard-2">
  <Text className="text-foreground">Hello</Text>
</Box>`,
  },
  {
    name: "VStack / HStack",
    category: "layout",
    description:
      "Vertical and horizontal stacks with consistent spacing through the space prop.",
    keywords: ["stack", "column", "row", "layout", "flex", "spacing"],
    props: ["space", "reversed", "className"],
    example: `import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Text } from "@/components/ui/text";

<VStack space="md">
  <HStack space="sm" className="items-center">
    <Avatar size="sm">
      <AvatarFallbackText>AB</AvatarFallbackText>
    </Avatar>
    <Text size="sm">Ava Brooks</Text>
  </HStack>
</VStack>`,
  },
  {
    name: "Center",
    category: "layout",
    description: "Box that centers its children horizontally and vertically.",
    keywords: ["center", "middle", "align", "layout"],
    props: ["className"],
    example: `import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";

<Center className="flex-1 bg-background">
  <Text className="text-foreground">Centered content</Text>
</Center>`,
  },
  {
    name: "Text / Heading",
    category: "typography",
    description:
      "Text renders body copy; Heading renders titles. Both support sizes, weights, truncation, and semantic color classes.",
    keywords: ["text", "title", "heading", "label", "typography", "font"],
    props: ["size", "bold", "italic", "underline", "strikeThrough", "highlight", "isTruncated", "className"],
    example: `import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

<Heading size="xl" className="text-foreground">Title</Heading>
<Text size="sm" className="text-muted-foreground">Subtitle</Text>`,
  },
  {
    name: "Button",
    category: "action",
    description:
      "Compound button with variants, sizes, loading state, and optional icons. Use ButtonText for the label.",
    keywords: ["button", "submit", "cta", "press", "action", "click"],
    props: [
      "action (primary | secondary | positive | negative | default)",
      "variant (solid | outline | link)",
      "size (xs | sm | md | lg | xl)",
      "isDisabled",
      "onPress",
      "ButtonText",
      "ButtonIcon",
      "ButtonSpinner",
      "ButtonGroup",
    ],
    example: `import { Button, ButtonText, ButtonIcon, ButtonSpinner } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icon";

<Button action="primary" size="md" onPress={() => {}}>
  <ButtonText>Continue</ButtonText>
  <ButtonIcon as={ArrowRightIcon} className="ml-2" />
</Button>

<Button isDisabled>
  <ButtonSpinner />
  <ButtonText className="ml-2">Saving...</ButtonText>
</Button>`,
  },
  {
    name: "Pressable",
    category: "action",
    description:
      "Accessible pressable wrapper with pressed/hovered/focused states. Use it for custom tappable surfaces instead of React Native TouchableOpacity.",
    keywords: ["pressable", "touchable", "tap", "click", "press", "action"],
    props: ["onPress", "isDisabled", "isHovered", "isPressed", "isFocused", "className"],
    example: `import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";

<Pressable className="p-4 rounded-lg bg-primary" onPress={() => {}}>
  {({ pressed }) => (
    <Text className={pressed ? "text-primary-foreground/70" : "text-primary-foreground"}>
      Tap me
    </Text>
  )}
</Pressable>`,
  },
  {
    name: "Link",
    category: "action",
    description: "Accessible hyperlink with LinkText for the clickable label.",
    keywords: ["link", "url", "href", "navigation", "external"],
    props: ["href", "isExternal", "onPress", "LinkText", "size", "className"],
    example: `import { Link, LinkText } from "@/components/ui/link";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { ArrowRightIcon } from "@/components/ui/icon";

<Link href="https://gluestack.io" isExternal>
  <HStack className="items-center">
    <LinkText size="sm" className="text-primary">Read the docs</LinkText>
    <Icon as={ArrowRightIcon} size="sm" className="text-primary ml-1" />
  </HStack>
</Link>`,
  },
  {
    name: "Icon",
    category: "media",
    description:
      "Renders any icon component passed through the as prop. Works with gluestack icons, Lucide, and custom SVG icons created with createIcon.",
    keywords: ["icon", "symbol", "glyph", "lucide", "svg", "media"],
    props: ["as", "size", "className", "color"],
    example: `import { Icon, SearchIcon, EyeIcon, EyeOffIcon } from "@/components/ui/icon";

<Icon as={SearchIcon} size="md" className="text-muted-foreground" />
<Icon as={EyeIcon} className="text-foreground" />`,
  },
  {
    name: "Input",
    category: "form",
    description:
      "Compound text input. InputField is the actual field, InputSlot wraps adornments, and InputIcon must live inside an InputSlot.",
    keywords: ["input", "text field", "textbox", "email", "password", "search", "form"],
    props: [
      "variant (underlined | outline | rounded)",
      "size (xs | sm | md | lg | xl)",
      "isInvalid",
      "isDisabled",
      "isReadOnly",
      "isRequired",
      "InputField",
      "InputSlot",
      "InputIcon",
    ],
    example: `import { Input, InputField, InputSlot, InputIcon } from "@/components/ui/input";
import { SearchIcon } from "@/components/ui/icon";

<Input variant="outline" size="md">
  <InputSlot className="pl-3">
    <InputIcon as={SearchIcon} className="text-muted-foreground" />
  </InputSlot>
  <InputField placeholder="Search..." />
</Input>`,
  },
  {
    name: "FormControl",
    category: "form",
    description:
      "Wraps inputs with labels, helper text, and error messages, and coordinates invalid, required, disabled, and read-only states.",
    keywords: ["form", "label", "validation", "error", "helper", "field"],
    props: [
      "isInvalid",
      "isRequired",
      "isDisabled",
      "isReadOnly",
      "FormControlLabel",
      "FormControlLabelText",
      "FormControlHelper",
      "FormControlHelperText",
      "FormControlError",
      "FormControlErrorText",
      "FormControlErrorIcon",
    ],
    example: `import { FormControl, FormControlLabel, FormControlLabelText, FormControlHelper, FormControlHelperText, FormControlError, FormControlErrorText, FormControlErrorIcon } from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { AlertCircleIcon } from "@/components/ui/icon";

<FormControl isRequired isInvalid={!!error}>
  <FormControlLabel>
    <FormControlLabelText>Email</FormControlLabelText>
  </FormControlLabel>
  <Input>
    <InputField placeholder="you@example.com" />
  </Input>
  <FormControlHelper>
    <FormControlHelperText>We never share your email.</FormControlHelperText>
  </FormControlHelper>
  <FormControlError>
    <FormControlErrorIcon as={AlertCircleIcon} className="text-destructive" />
    <FormControlErrorText className="text-destructive">{error}</FormControlErrorText>
  </FormControlError>
</FormControl>`,
  },
  {
    name: "Textarea",
    category: "form",
    description: "Multi-line text input with the same states and sizes as Input.",
    keywords: ["textarea", "multiline", "comment", "message", "form"],
    props: ["size", "isInvalid", "isDisabled", "isReadOnly", "TextareaInput", "className"],
    example: `import { Textarea, TextareaInput } from "@/components/ui/textarea";

<Textarea size="md" className="w-full">
  <TextareaInput placeholder="Type your comment here..." />
</Textarea>`,
  },
  {
    name: "Select",
    category: "form",
    description:
      "Accessible dropdown built from compound parts: SelectTrigger, SelectInput, SelectPortal, SelectContent, and SelectItem.",
    keywords: ["select", "dropdown", "picker", "choose", "option"],
    props: [
      "selectedValue",
      "onValueChange",
      "isDisabled",
      "isInvalid",
      "SelectTrigger",
      "SelectInput",
      "SelectIcon",
      "SelectPortal",
      "SelectContent",
      "SelectItem",
      "SelectDragIndicator",
    ],
    example: `import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from "@/components/ui/select";
import { ChevronDownIcon } from "@/components/ui/icon";

<Select selectedValue={lang} onValueChange={setLang}>
  <SelectTrigger>
    <SelectInput placeholder="Language" className="flex-1" />
    <SelectIcon as={ChevronDownIcon} className="mr-3" />
  </SelectTrigger>
  <SelectPortal>
    <SelectBackdrop />
    <SelectContent>
      <SelectDragIndicatorWrapper>
        <SelectDragIndicator />
      </SelectDragIndicatorWrapper>
      <SelectItem label="English" value="en" />
      <SelectItem label="Hindi" value="hi" />
      <SelectItem label="Marathi" value="mr" />
    </SelectContent>
  </SelectPortal>
</Select>`,
  },
  {
    name: "Checkbox",
    category: "form",
    description:
      "Compound checkbox with CheckboxIndicator, CheckboxIcon, and CheckboxLabel. CheckboxGroup manages multiple values.",
    keywords: ["checkbox", "check", "multiple", "option", "consent", "form"],
    props: ["value", "isChecked", "isDisabled", "isInvalid", "CheckboxGroup", "CheckboxIndicator", "CheckboxIcon", "CheckboxLabel"],
    example: `import { Checkbox, CheckboxGroup, CheckboxIndicator, CheckboxIcon, CheckboxLabel } from "@/components/ui/checkbox";
import { CheckIcon } from "@/components/ui/icon";

<CheckboxGroup value={values} onChange={setValues}>
  <Checkbox value="terms">
    <CheckboxIndicator>
      <CheckboxIcon as={CheckIcon} />
    </CheckboxIndicator>
    <CheckboxLabel>I agree to the terms</CheckboxLabel>
  </Checkbox>
</CheckboxGroup>`,
  },
  {
    name: "Radio",
    category: "form",
    description:
      "Single-choice control built from RadioGroup, RadioIndicator, RadioIcon, and RadioLabel.",
    keywords: ["radio", "choice", "option", "single", "form"],
    props: ["value", "isDisabled", "isInvalid", "RadioGroup", "RadioIndicator", "RadioIcon", "RadioLabel"],
    example: `import { Radio, RadioGroup, RadioIndicator, RadioIcon, RadioLabel } from "@/components/ui/radio";
import { CircleIcon } from "@/components/ui/icon";

<RadioGroup value={plan} onChange={setPlan}>
  <Radio value="monthly">
    <RadioIndicator>
      <RadioIcon as={CircleIcon} />
    </RadioIndicator>
    <RadioLabel>Monthly</RadioLabel>
  </Radio>
  <Radio value="yearly">
    <RadioIndicator>
      <RadioIcon as={CircleIcon} />
    </RadioIndicator>
    <RadioLabel>Yearly</RadioLabel>
  </Radio>
</RadioGroup>`,
  },
  {
    name: "Switch",
    category: "form",
    description: "Toggle switch for boolean settings.",
    keywords: ["switch", "toggle", "boolean", "settings", "preference", "form"],
    props: ["value", "defaultValue", "onToggle", "size (sm | md | lg)", "isDisabled", "isInvalid", "isRequired", "trackColor", "thumbColor"],
    example: `import { Switch } from "@/components/ui/switch";

<Switch
  value={enabled}
  onToggle={() => setEnabled(!enabled)}
  trackColor={{ false: "#d4d4d4", true: "#525252" }}
/>`,
  },
  {
    name: "Slider",
    category: "form",
    description:
      "Range control built from SliderTrack, SliderFilledTrack, and SliderThumb.",
    keywords: ["slider", "range", "value", "progress", "form"],
    props: ["value", "defaultValue", "minValue", "maxValue", "onChange", "orientation", "isDisabled", "isReversed", "SliderTrack", "SliderFilledTrack", "SliderThumb"],
    example: `import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@/components/ui/slider";

<Slider defaultValue={30} minValue={0} maxValue={100}>
  <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider>`,
  },
  {
    name: "Avatar",
    category: "media",
    description:
      "User image with initials fallback and optional status badge. Compose with AvatarFallbackText, AvatarImage, and AvatarBadge.",
    keywords: ["avatar", "profile", "user", "picture", "photo", "media"],
    props: ["size (xs | sm | md | lg | xl | 2xl)", "AvatarFallbackText", "AvatarImage", "AvatarBadge", "AvatarGroup"],
    example: `import { Avatar, AvatarFallbackText, AvatarImage, AvatarBadge } from "@/components/ui/avatar";

<Avatar size="lg">
  <AvatarFallbackText>AB</AvatarFallbackText>
  <AvatarImage source={{ uri: "https://i.pravatar.cc/150" }} alt="Ava Brooks" />
  <AvatarBadge />
</Avatar>`,
  },
  {
    name: "Image",
    category: "media",
    description:
      "Image component with size presets, source, and alt text. Use className for custom dimensions and rounding.",
    keywords: ["image", "picture", "photo", "banner", "thumbnail", "media"],
    props: ["source", "alt", "size", "fallbackSource", "resizeMode", "className"],
    example: `import { Image } from "@/components/ui/image";

<Image
  source={{ uri: "https://picsum.photos/400" }}
  alt="Cover"
  size="none"
  className="w-full h-40 rounded-lg"
/>`,
  },
  {
    name: "Badge",
    category: "data",
    description: "Small status label or counter with BadgeText and optional BadgeIcon.",
    keywords: ["badge", "tag", "chip", "status", "label", "new", "count"],
    props: ["action (error | warning | success | info | muted)", "variant (solid | outline)", "size (sm | md | lg)", "BadgeText", "BadgeIcon"],
    example: `import { Badge, BadgeText } from "@/components/ui/badge";

<Badge action="success" variant="outline" size="sm">
  <BadgeText>NEW</BadgeText>
</Badge>`,
  },
  {
    name: "Card",
    category: "data",
    description:
      "Container for grouped content such as products, profiles, posts, and stats.",
    keywords: ["card", "container", "product", "profile", "post", "panel"],
    props: ["className", "style"],
    example: `import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

<Card className="p-5 rounded-lg max-w-[360px]">
  <Heading size="md" className="mb-2">Card title</Heading>
  <Text size="sm" className="text-muted-foreground">Card description.</Text>
</Card>`,
  },
  {
    name: "Alert",
    category: "feedback",
    description: "Inline message with status action (error, warning, success, info, muted).",
    keywords: ["alert", "message", "error", "warning", "info", "banner"],
    props: ["action (error | warning | success | info | muted)", "variant (solid | outline)", "AlertIcon", "AlertText"],
    example: `import { Alert, AlertIcon, AlertText } from "@/components/ui/alert";
import { AlertCircleIcon } from "@/components/ui/icon";

<Alert action="error" variant="outline" className="gap-3">
  <AlertIcon as={AlertCircleIcon} className="text-destructive" />
  <AlertText size="sm">Something went wrong. Please try again.</AlertText>
</Alert>`,
  },
  {
    name: "Progress",
    category: "feedback",
    description: "Progress bar with a filled track for completion and loading states.",
    keywords: ["progress", "bar", "loading", "completion", "percent", "feedback"],
    props: ["value", "size (xs | sm | md | lg | xl | 2xl)", "orientation (horizontal | vertical)", "ProgressFilledTrack"],
    example: `import { Progress, ProgressFilledTrack } from "@/components/ui/progress";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";

<VStack space="sm">
  <Text size="sm">Uploading 55%</Text>
  <Progress value={55} className="w-full h-2">
    <ProgressFilledTrack />
  </Progress>
</VStack>`,
  },
  {
    name: "Spinner",
    category: "feedback",
    description: "Activity indicator for loading states.",
    keywords: ["loading", "spinner", "progress", "wait", "indicator", "feedback"],
    props: ["size", "color", "className"],
    example: `import { Spinner } from "@/components/ui/spinner";

<Spinner size="lg" className="text-primary" />`,
  },
  {
    name: "Skeleton",
    category: "feedback",
    description:
      "Animated placeholder for content that is still loading. SkeletonText renders multiple lines.",
    keywords: ["skeleton", "placeholder", "loading", "shimmer", "feedback"],
    props: ["variant", "isLoaded", "startColor", "speed", "SkeletonText", "lines", "gap"],
    example: `import { Skeleton, SkeletonText } from "@/components/ui/skeleton";

<Skeleton variant="rounded" className="h-40 w-full rounded-lg">
  <SkeletonText lines={2} className="w-3/4" />
</Skeleton>`,
  },
  {
    name: "Modal",
    category: "overlay",
    description:
      "Accessible dialog built from ModalBackdrop, ModalContent, ModalHeader, ModalBody, and ModalFooter.",
    keywords: ["modal", "dialog", "popup", "confirm", "overlay", "sheet"],
    props: ["isOpen", "onClose", "size (xs | sm | md | lg | full)", "ModalBackdrop", "ModalContent", "ModalHeader", "ModalBody", "ModalFooter", "ModalCloseButton"],
    example: `import { Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@/components/ui/modal";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Icon, CloseIcon } from "@/components/ui/icon";

<Modal isOpen={open} onClose={() => setOpen(false)}>
  <ModalBackdrop />
  <ModalContent>
    <ModalHeader>
      <Heading size="md">Confirm</Heading>
      <ModalCloseButton>
        <Icon as={CloseIcon} className="text-foreground" />
      </ModalCloseButton>
    </ModalHeader>
    <ModalBody>
      <Text size="sm">Are you sure you want to continue?</Text>
    </ModalBody>
    <ModalFooter className="gap-2">
      <Button variant="outline" action="secondary" onPress={() => setOpen(false)}>
        <ButtonText>Cancel</ButtonText>
      </Button>
      <Button onPress={() => setOpen(false)}>
        <ButtonText>Confirm</ButtonText>
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>`,
  },
  {
    name: "AlertDialog",
    category: "overlay",
    description:
      "Destructive or high-priority confirmation dialog. Unlike Modal, it is intended for interrupting decisions.",
    keywords: ["alertdialog", "alert dialog", "confirm", "delete", "destructive", "overlay"],
    props: ["isOpen", "onClose", "size (xs | sm | md | lg | full)", "AlertDialogBackdrop", "AlertDialogContent", "AlertDialogHeader", "AlertDialogBody", "AlertDialogFooter", "AlertDialogCloseButton"],
    example: `import { AlertDialog, AlertDialogBackdrop, AlertDialogContent, AlertDialogHeader, AlertDialogCloseButton, AlertDialogBody, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Icon, CloseIcon } from "@/components/ui/icon";

<AlertDialog isOpen={open} onClose={() => setOpen(false)}>
  <AlertDialogBackdrop />
  <AlertDialogContent>
    <AlertDialogHeader>
      <Heading size="md">Delete post?</Heading>
      <AlertDialogCloseButton>
        <Icon as={CloseIcon} />
      </AlertDialogCloseButton>
    </AlertDialogHeader>
    <AlertDialogBody>
      <Text size="sm">This action cannot be undone.</Text>
    </AlertDialogBody>
    <AlertDialogFooter className="gap-2">
      <Button variant="outline" action="secondary" onPress={() => setOpen(false)}>
        <ButtonText>Cancel</ButtonText>
      </Button>
      <Button action="negative" onPress={() => setOpen(false)}>
        <ButtonText>Delete</ButtonText>
      </Button>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
  },
  {
    name: "Menu",
    category: "overlay",
    description:
      "Dropdown menu with keyboard navigation. Pass a trigger function and compose MenuItem, MenuItemLabel, and MenuSeparator.",
    keywords: ["menu", "dropdown", "actions", "context menu", "overlay"],
    props: ["trigger", "placement", "offset", "disabledKeys", "MenuItem", "MenuItemLabel", "MenuSeparator"],
    example: `import { Menu, MenuItem, MenuItemLabel, MenuSeparator } from "@/components/ui/menu";
import { Button, ButtonText } from "@/components/ui/button";

<Menu
  trigger={({ ...triggerProps }) => (
    <Button {...triggerProps}>
      <ButtonText>Actions</ButtonText>
    </Button>
  )}
>
  <MenuItem key="edit" textValue="Edit">
    <MenuItemLabel>Edit</MenuItemLabel>
  </MenuItem>
  <MenuSeparator />
  <MenuItem key="delete" textValue="Delete">
    <MenuItemLabel>Delete</MenuItemLabel>
  </MenuItem>
</Menu>`,
  },
  {
    name: "useToast",
    category: "feedback",
    description:
      "Hook for transient toast notifications. Provide a render function that returns Toast with ToastTitle and ToastDescription.",
    keywords: ["toast", "snackbar", "notification", "feedback", "message"],
    props: ["toast.show({ placement, duration, render })", "toast.close(id)", "Toast", "ToastTitle", "ToastDescription"],
    example: `import { useToast, Toast, ToastTitle, ToastDescription } from "@/components/ui/toast";

const toast = useToast();

toast.show({
  placement: "top",
  duration: 3000,
  render: ({ id }) => (
    <Toast nativeID={"toast-" + id} action="success" variant="solid" className="p-4 gap-1">
      <ToastTitle>Saved!</ToastTitle>
      <ToastDescription size="sm">Your changes were saved.</ToastDescription>
    </Toast>
  ),
});`,
  },
  {
    name: "Divider",
    category: "layout",
    description: "Thin separator line with horizontal or vertical orientation.",
    keywords: ["divider", "separator", "line", "hr", "layout"],
    props: ["orientation (horizontal | vertical)", "className"],
    example: `import { Divider } from "@/components/ui/divider";

<Divider className="my-3" />
<Divider orientation="vertical" className="h-6" />`,
  },
  {
    name: "Fab",
    category: "action",
    description:
      "Floating action button with icon and optional label, positioned in a corner of its parent.",
    keywords: ["fab", "floating", "add", "action", "button"],
    props: ["size (sm | md | lg)", "placement", "isDisabled", "isHovered", "isPressed", "FabIcon", "FabLabel"],
    example: `import { Fab, FabIcon, FabLabel } from "@/components/ui/fab";
import { AddIcon } from "@/components/ui/icon";

<Fab size="md" placement="bottom right">
  <FabIcon as={AddIcon} />
  <FabLabel>Add</FabLabel>
</Fab>`,
  },
  {
    name: "FlatList",
    category: "data",
    description:
      "Performant list from React Native. gluestack-ui has no list wrapper, so use React Native's FlatList and render gluestack components inside renderItem.",
    keywords: ["list", "flatlist", "feed", "items", "scroll", "data"],
    props: ["data", "renderItem", "keyExtractor", "ItemSeparatorComponent", "ListEmptyComponent"],
    example: `import { FlatList } from "react-native";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";

<FlatList
  data={items}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <Box className="p-3 border-b border-border">
      <Text>{item.title}</Text>
    </Box>
  )}
/>`,
  },
];
