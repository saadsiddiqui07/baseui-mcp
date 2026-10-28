export interface Template {
  id: string;
  name: string;
  keywords: string[];
  description: string;
  components: string[];
  code: string;
}

export const templates: Template[] = [
  {
    id: "login",
    name: "Login Screen",
    keywords: ["login", "sign in", "signin", "auth", "password", "email", "authentication"],
    description: "Email + password login with show/hide password and forgot link.",
    components: ["Center", "Box", "Heading", "VStack", "FormControl", "Input", "Button", "Link"],
    code: `import React, { useState } from "react";
import { Box, Center, Heading, VStack, FormControl, Input, Button, Link, HStack, Text } from "native-base";

export default function LoginScreen() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Center flex={1} px="4">
      <Box safeArea w="100%" maxW="290">
        <Heading size="lg" fontWeight="600">Welcome</Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </FormControl>

          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type={show ? "text" : "password"}
              value={password}
              onChangeText={setPassword}
              InputRightElement={
                <Button size="xs" variant="ghost" onPress={() => setShow(!show)}>
                  {show ? "Hide" : "Show"}
                </Button>
              }
            />
            <Link alignSelf="flex-end" mt="1" _text={{ fontSize: "xs", color: "indigo.500" }}>
              Forgot Password?
            </Link>
          </FormControl>

          <Button mt="2" colorScheme="indigo" onPress={() => console.log({ email, password })}>
            Sign in
          </Button>

          <HStack mt="4" justifyContent="center" space={1}>
            <Text fontSize="sm" color="coolGray.600">New user?</Text>
            <Link _text={{ color: "indigo.500", fontWeight: "medium", fontSize: "sm" }}>Sign Up</Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}`,
  },
  {
    id: "profile-card",
    name: "Profile Card",
    keywords: ["profile", "user", "card", "avatar", "account", "followers", "stats"],
    description: "Avatar, name, bio, stats row and action buttons.",
    components: ["Box", "Avatar", "Heading", "Text", "HStack", "VStack", "Button", "Divider"],
    code: `import React from "react";
import { Box, Avatar, Heading, Text, HStack, VStack, Button, Divider, Center } from "native-base";

const Stat = ({ label, value }: { label: string; value: string }) => (
  <VStack alignItems="center">
    <Heading size="sm">{value}</Heading>
    <Text fontSize="xs" color="muted.500">{label}</Text>
  </VStack>
);

export default function ProfileCard() {
  return (
    <Center flex={1} px="4">
      <Box w="100%" maxW="340" bg="white" rounded="2xl" shadow={3} p="5">
        <VStack alignItems="center" space={2}>
          <Avatar size="xl" source={{ uri: "https://i.pravatar.cc/200" }}>
            AB
            <Avatar.Badge bg="green.500" />
          </Avatar>
          <Heading size="md">Aarav Sharma</Heading>
          <Text color="muted.500" textAlign="center">
            Mobile developer. Coffee and clean UI.
          </Text>
        </VStack>

        <Divider my="4" />

        <HStack justifyContent="space-around">
          <Stat label="Posts" value="128" />
          <Stat label="Followers" value="4.2k" />
          <Stat label="Following" value="310" />
        </HStack>

        <HStack space={3} mt="5">
          <Button flex={1} colorScheme="indigo">Follow</Button>
          <Button flex={1} variant="outline" colorScheme="indigo">Message</Button>
        </HStack>
      </Box>
    </Center>
  );
}`,
  },
  {
    id: "product-card",
    name: "Product Card List",
    keywords: ["product", "shop", "ecommerce", "e-commerce", "store", "cart", "price", "card", "list", "catalog"],
    description: "Scrollable product list with image, badge, price and add-to-cart.",
    components: ["FlatList", "Box", "Image", "Badge", "Heading", "Text", "HStack", "Button"],
    code: `import React from "react";
import { FlatList, Box, Image, Badge, Heading, Text, HStack, Button } from "native-base";

type Product = { id: string; title: string; price: number; image: string; isNew?: boolean };

const PRODUCTS: Product[] = [
  { id: "1", title: "Wireless Headphones", price: 79, image: "https://picsum.photos/seed/a/400", isNew: true },
  { id: "2", title: "Smart Watch", price: 129, image: "https://picsum.photos/seed/b/400" },
  { id: "3", title: "Backpack", price: 49, image: "https://picsum.photos/seed/c/400" },
];

export default function ProductList() {
  return (
    <FlatList
      data={PRODUCTS}
      keyExtractor={(p) => p.id}
      contentContainerStyle={{ padding: 16 }}
      ItemSeparatorComponent={() => <Box h="4" />}
      renderItem={({ item }) => (
        <Box bg="white" rounded="xl" shadow={2} overflow="hidden">
          <Image source={{ uri: item.image }} alt={item.title} w="100%" h="48" />
          <Box p="4">
            <HStack justifyContent="space-between" alignItems="center">
              <Heading size="sm" flexShrink={1}>{item.title}</Heading>
              {item.isNew && <Badge colorScheme="success" variant="subtle">NEW</Badge>}
            </HStack>
            <HStack mt="3" justifyContent="space-between" alignItems="center">
              <Text fontSize="lg" bold>\${item.price}</Text>
              <Button size="sm" colorScheme="indigo">Add to cart</Button>
            </HStack>
          </Box>
        </Box>
      )}
    />
  );
}`,
  },
  {
    id: "settings",
    name: "Settings Screen",
    keywords: ["settings", "preferences", "toggle", "switch", "options", "notifications", "dark mode"],
    description: "Settings list with switches and a language select.",
    components: ["Box", "VStack", "HStack", "Heading", "Text", "Switch", "Select", "Divider"],
    code: `import React, { useState } from "react";
import { Box, VStack, HStack, Heading, Text, Switch, Select, Divider } from "native-base";

const Row = ({ title, subtitle, right }: { title: string; subtitle?: string; right: React.ReactNode }) => (
  <HStack justifyContent="space-between" alignItems="center" py="3">
    <VStack flexShrink={1} pr="3">
      <Text bold>{title}</Text>
      {subtitle ? <Text fontSize="xs" color="muted.500">{subtitle}</Text> : null}
    </VStack>
    {right}
  </HStack>
);

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState("en");

  return (
    <Box safeArea flex={1} px="4" pt="4" bg="white">
      <Heading size="lg" mb="2">Settings</Heading>
      <VStack divider={<Divider />}>
        <Row
          title="Notifications"
          subtitle="Receive push notifications"
          right={<Switch isChecked={notifications} onToggle={setNotifications} colorScheme="emerald" />}
        />
        <Row
          title="Dark mode"
          right={<Switch isChecked={dark} onToggle={setDark} colorScheme="emerald" />}
        />
        <Row
          title="Language"
          right={
            <Select selectedValue={lang} minW="120" onValueChange={setLang}>
              <Select.Item label="English" value="en" />
              <Select.Item label="Hindi" value="hi" />
              <Select.Item label="Marathi" value="mr" />
            </Select>
          }
        />
      </VStack>
    </Box>
  );
}`,
  },
];