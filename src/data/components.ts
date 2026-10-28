export interface ComponentDoc {
  name: string;
  category: "layout" | "typography" | "form" | "feedback" | "data" | "action" | "media";
  description: string;
  keywords: string[];
  props: string[];
  example: string;
}

export const components: ComponentDoc[] = [
  {
    name: "Box",
    category: "layout",
    description: "Base container, like a View with style props (bg, p, m, rounded, shadow).",
    keywords: ["container", "card", "wrapper", "view", "section"],
    props: ["bg", "p / px / py", "m / mt / mb", "rounded", "shadow", "borderWidth", "safeArea"],
    example: `<Box bg="white" p="4" rounded="xl" shadow={2}>
  <Text>Hello</Text>
</Box>`,
  },
  {
    name: "VStack / HStack",
    category: "layout",
    description: "Vertical / horizontal stacks with consistent spacing via the space prop.",
    keywords: ["stack", "column", "row", "layout", "flex", "spacing"],
    props: ["space", "alignItems", "justifyContent", "reversed"],
    example: `<VStack space={3}>
  <HStack space={2} alignItems="center">
    <Avatar size="sm">AB</Avatar>
    <Text>Name</Text>
  </HStack>
</VStack>`,
  },
  {
    name: "Center",
    category: "layout",
    description: "Box that centers its children horizontally and vertically.",
    keywords: ["center", "middle", "align"],
    props: ["flex", "bg", "size"],
    example: `<Center flex={1}>
  <Text>Centered</Text>
</Center>`,
  },
  {
    name: "Text / Heading",
    category: "typography",
    description: "Text renders body copy; Heading renders titles with size tokens.",
    keywords: ["text", "title", "heading", "label", "typography", "font"],
    props: ["fontSize", "fontWeight", "color", "bold", "italic", "isTruncated", "size (Heading)"],
    example: `<Heading size="lg">Title</Heading>
<Text fontSize="sm" color="muted.500">Subtitle</Text>`,
  },
  {
    name: "Button",
    category: "action",
    description: "Pressable button with variants, sizes and loading state.",
    keywords: ["button", "submit", "cta", "press", "action", "click"],
    props: ["onPress", "variant (solid|outline|ghost|subtle|link)", "colorScheme", "size", "isLoading", "isDisabled", "leftIcon", "rightIcon"],
    example: `<Button colorScheme="indigo" size="md" onPress={() => {}}>
  Continue
</Button>`,
  },
  {
    name: "IconButton",
    category: "action",
    description: "Button that renders only an icon.",
    keywords: ["icon", "button", "toolbar", "close"],
    props: ["icon", "variant", "colorScheme", "borderRadius", "onPress"],
    example: `<IconButton variant="ghost" icon={<Icon as={MaterialIcons} name="menu" />} />`,
  },
  {
    name: "Input",
    category: "form",
    description: "Text input with variants, left/right elements and password support.",
    keywords: ["input", "text field", "textbox", "email", "password", "search", "form"],
    props: ["placeholder", "type (text|password)", "variant", "size", "InputLeftElement", "InputRightElement", "isInvalid", "value", "onChangeText"],
    example: `<Input placeholder="Search" variant="rounded" size="lg" value={q} onChangeText={setQ} />`,
  },
  {
    name: "FormControl",
    category: "form",
    description: "Wraps inputs with label, helper text and error message.",
    keywords: ["form", "label", "validation", "error", "helper", "field"],
    props: ["isInvalid", "isRequired", "isDisabled", "FormControl.Label", "FormControl.HelperText", "FormControl.ErrorMessage"],
    example: `<FormControl isRequired isInvalid={!!error}>
  <FormControl.Label>Email</FormControl.Label>
  <Input value={email} onChangeText={setEmail} />
  <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
</FormControl>`,
  },
  {
    name: "Switch / Checkbox / Radio",
    category: "form",
    description: "Toggle controls for boolean and single/multi choice values.",
    keywords: ["switch", "toggle", "checkbox", "radio", "settings", "option", "preference"],
    props: ["isChecked", "onToggle (Switch)", "onChange", "value", "colorScheme", "size"],
    example: `<Switch isChecked={on} onToggle={setOn} colorScheme="emerald" />
<Checkbox value="terms" colorScheme="green">I agree</Checkbox>`,
  },
  {
    name: "Select",
    category: "form",
    description: "Dropdown picker with Select.Item options.",
    keywords: ["select", "dropdown", "picker", "choose"],
    props: ["selectedValue", "onValueChange", "placeholder", "minWidth"],
    example: `<Select selectedValue={lang} placeholder="Language" onValueChange={setLang}>
  <Select.Item label="English" value="en" />
  <Select.Item label="Hindi" value="hi" />
</Select>`,
  },
  {
    name: "Avatar",
    category: "media",
    description: "User image or initials with optional status badge.",
    keywords: ["avatar", "profile", "user", "picture", "photo"],
    props: ["source", "size (xs..2xl)", "bg", "Avatar.Badge", "Avatar.Group"],
    example: `<Avatar size="lg" source={{ uri: "https://i.pravatar.cc/150" }}>
  AB
  <Avatar.Badge bg="green.500" />
</Avatar>`,
  },
  {
    name: "Image",
    category: "media",
    description: "Image component with alt text and size props.",
    keywords: ["image", "picture", "photo", "banner", "thumbnail"],
    props: ["source", "alt", "size", "resizeMode", "borderRadius"],
    example: `<Image source={{ uri: "https://picsum.photos/400" }} alt="cover" w="100%" h="40" rounded="lg" />`,
  },
  {
    name: "Badge",
    category: "feedback",
    description: "Small status label or counter.",
    keywords: ["badge", "tag", "chip", "status", "label", "new"],
    props: ["colorScheme", "variant (solid|subtle|outline)", "rounded"],
    example: `<Badge colorScheme="success" variant="subtle" rounded="md">NEW</Badge>`,
  },
  {
    name: "Alert",
    category: "feedback",
    description: "Inline message with status (success, error, warning, info).",
    keywords: ["alert", "message", "error", "warning", "info", "banner"],
    props: ["status", "variant", "Alert.Icon"],
    example: `<Alert status="error" w="100%">
  <HStack space={2} alignItems="center">
    <Alert.Icon />
    <Text>Something went wrong</Text>
  </HStack>
</Alert>`,
  },
  {
    name: "Modal",
    category: "feedback",
    description: "Dialog with Header, Body, Footer and close button.",
    keywords: ["modal", "dialog", "popup", "confirm", "overlay"],
    props: ["isOpen", "onClose", "size", "Modal.Content", "Modal.Header", "Modal.Body", "Modal.Footer", "Modal.CloseButton"],
    example: `<Modal isOpen={open} onClose={() => setOpen(false)}>
  <Modal.Content>
    <Modal.CloseButton />
    <Modal.Header>Confirm</Modal.Header>
    <Modal.Body><Text>Are you sure?</Text></Modal.Body>
    <Modal.Footer>
      <Button onPress={() => setOpen(false)}>OK</Button>
    </Modal.Footer>
  </Modal.Content>
</Modal>`,
  },
  {
    name: "useToast",
    category: "feedback",
    description: "Hook for transient toast notifications.",
    keywords: ["toast", "snackbar", "notification", "feedback"],
    props: ["toast.show({ description, placement, duration })", "toast.close(id)"],
    example: `const toast = useToast();
toast.show({ description: "Saved!", placement: "top" });`,
  },
  {
    name: "Spinner / Skeleton",
    category: "feedback",
    description: "Loading indicators.",
    keywords: ["loading", "spinner", "skeleton", "progress", "wait"],
    props: ["color", "size", "accessibilityLabel", "Skeleton.Text"],
    example: `<Spinner size="lg" color="indigo.500" />`,
  },
  {
    name: "FlatList",
    category: "data",
    description: "Performant list for long data sets (NativeBase re-export of RN FlatList).",
    keywords: ["list", "flatlist", "feed", "items", "scroll", "data"],
    props: ["data", "renderItem", "keyExtractor", "ItemSeparatorComponent"],
    example: `<FlatList
  data={items}
  keyExtractor={(i) => i.id}
  renderItem={({ item }) => <Box p="3"><Text>{item.title}</Text></Box>}
/>`,
  },
  {
    name: "Divider",
    category: "layout",
    description: "Thin separator line.",
    keywords: ["divider", "separator", "line", "hr"],
    props: ["orientation", "thickness", "bg"],
    example: `<Divider my="3" />`,
  },
  {
    name: "Fab",
    category: "action",
    description: "Floating action button.",
    keywords: ["fab", "floating", "add", "action"],
    props: ["label", "icon", "placement", "size", "renderInPortal"],
    example: `<Fab renderInPortal={false} shadow={2} size="sm" label="Add" />`,
  },
];