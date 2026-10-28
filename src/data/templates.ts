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
    description: "Email + password login with show/hide password and forgot-password link.",
    components: ["Center", "Box", "Heading", "Text", "VStack", "HStack", "FormControl", "Input", "Button", "Link"],
    code: `import React, { useState } from "react";
import { Center } from "@/components/ui/center";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField, InputSlot, InputIcon } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Link, LinkText } from "@/components/ui/link";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Center className="flex-1 bg-background px-4">
      <Box className="w-full max-w-[340px] p-6 rounded-2xl bg-card border border-border shadow-hard-2">
        <Heading size="xl" className="text-foreground">Welcome back</Heading>
        <Text size="sm" className="text-muted-foreground mt-1">
          Sign in to continue.
        </Text>

        <VStack space="lg" className="mt-6">
          <FormControl isRequired>
            <FormControlLabel>
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <Input className="mt-1">
              <InputField
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="you@example.com"
                value={email}
                onChangeText={setEmail}
              />
            </Input>
          </FormControl>

          <FormControl isRequired>
            <FormControlLabel>
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input className="mt-1">
              <InputField
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
              />
              <InputSlot className="pr-3" onPress={() => setShowPassword(!showPassword)}>
                <InputIcon
                  as={showPassword ? EyeOffIcon : EyeIcon}
                  className="text-muted-foreground"
                />
              </InputSlot>
            </Input>
            <HStack className="justify-end mt-2">
              <Link href="#">
                <LinkText size="sm" className="text-primary">
                  Forgot password?
                </LinkText>
              </Link>
            </HStack>
          </FormControl>

          <Button size="md" onPress={() => {}}>
            <ButtonText>Sign in</ButtonText>
          </Button>

          <HStack space="xs" className="justify-center">
            <Text size="sm" className="text-muted-foreground">
              Don't have an account?
            </Text>
            <Link href="#">
              <LinkText size="sm" className="text-primary">Sign up</LinkText>
            </Link>
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
    keywords: ["profile", "user", "avatar", "account", "card", "bio", "followers"],
    description: "User profile card with avatar, stats, and a follow button.",
    components: ["Box", "Card", "VStack", "HStack", "Avatar", "Heading", "Text", "Divider", "Button"],
    code: `import React from "react";
import { Box } from "@/components/ui/box";
import { Card } from "@/components/ui/card";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  AvatarBadge,
} from "@/components/ui/avatar";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Divider } from "@/components/ui/divider";
import { Button, ButtonText } from "@/components/ui/button";

export default function ProfileCard() {
  return (
    <Box className="flex-1 bg-background p-4 items-center justify-center">
      <Card className="w-full max-w-[360px] p-6 rounded-2xl">
        <VStack space="md" className="items-center">
          <Avatar size="2xl">
            <AvatarFallbackText>AB</AvatarFallbackText>
            <AvatarImage
              source={{ uri: "https://i.pravatar.cc/200?img=47" }}
              alt="Ava Brooks"
            />
            <AvatarBadge />
          </Avatar>

          <VStack space="xs" className="items-center">
            <Heading size="lg">Ava Brooks</Heading>
            <Text size="sm" className="text-muted-foreground">
              Product Designer
            </Text>
          </VStack>

          <HStack space="2xl" className="py-2">
            <VStack className="items-center">
              <Text bold className="text-foreground">128</Text>
              <Text size="xs" className="text-muted-foreground">Posts</Text>
            </VStack>
            <VStack className="items-center">
              <Text bold className="text-foreground">5.2k</Text>
              <Text size="xs" className="text-muted-foreground">Followers</Text>
            </VStack>
            <VStack className="items-center">
              <Text bold className="text-foreground">281</Text>
              <Text size="xs" className="text-muted-foreground">Following</Text>
            </VStack>
          </HStack>

          <Divider />

          <Button className="w-full" onPress={() => {}}>
            <ButtonText>Follow</ButtonText>
          </Button>
        </VStack>
      </Card>
    </Box>
  );
}`,
  },
  {
    id: "product-card",
    name: "Product Card List",
    keywords: ["product", "shop", "ecommerce", "e-commerce", "store", "cart", "price", "card", "list", "catalog"],
    description: "Scrollable product list with image, badge, price, and add-to-cart.",
    components: ["FlatList", "Box", "Card", "Image", "Badge", "Heading", "Text", "HStack", "VStack", "Button"],
    code: `import React from "react";
import { FlatList } from "react-native";
import { Box } from "@/components/ui/box";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Badge, BadgeText } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Button, ButtonText } from "@/components/ui/button";

type Product = {
  id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
};

const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Wireless Headphones",
    category: "Audio",
    price: 79,
    image: "https://picsum.photos/seed/a/400",
    isNew: true,
  },
  {
    id: "2",
    title: "Smart Watch",
    category: "Wearables",
    price: 129,
    image: "https://picsum.photos/seed/b/400",
  },
  {
    id: "3",
    title: "Everyday Backpack",
    category: "Bags",
    price: 49,
    image: "https://picsum.photos/seed/c/400",
  },
];

export default function ProductList() {
  return (
    <Box className="flex-1 bg-background">
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        ItemSeparatorComponent={() => <Box className="h-4" />}
        ListHeaderComponent={
          <VStack space="xs" className="mb-4">
            <Heading size="2xl">Products</Heading>
            <Text size="sm" className="text-muted-foreground">
              Fresh picks for you
            </Text>
          </VStack>
        }
        renderItem={({ item }) => (
          <Card className="p-4 rounded-xl">
            <HStack space="md">
              <Image
                source={{ uri: item.image }}
                alt={item.title}
                size="none"
                className="w-24 h-24 rounded-lg"
              />
              <VStack className="flex-1 justify-between">
                <VStack space="xs">
                  <HStack className="items-center justify-between">
                    <Heading size="sm" className="flex-1" isTruncated>
                      {item.title}
                    </Heading>
                    {item.isNew ? (
                      <Badge action="success" variant="outline" size="sm">
                        <BadgeText>NEW</BadgeText>
                      </Badge>
                    ) : null}
                  </HStack>
                  <Text size="sm" className="text-muted-foreground">
                    {item.category}
                  </Text>
                </VStack>
                <HStack className="items-center justify-between mt-3">
                  <Text size="lg" bold className="text-foreground">
                    {"$" + item.price}
                  </Text>
                  <Button size="sm" onPress={() => {}}>
                    <ButtonText>Add to cart</ButtonText>
                  </Button>
                </HStack>
              </VStack>
            </HStack>
          </Card>
        )}
      />
    </Box>
  );
}`,
  },
  {
    id: "settings",
    name: "Settings Screen",
    keywords: ["settings", "preferences", "toggle", "switch", "options", "notifications", "dark mode", "language", "logout"],
    description: "Settings list with switches, a language selector, and a logout button.",
    components: ["Box", "VStack", "HStack", "Heading", "Text", "Switch", "Select", "Divider", "Button"],
    code: `import React, { useState } from "react";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Switch } from "@/components/ui/switch";
import { Divider } from "@/components/ui/divider";
import { Button, ButtonText } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from "@/components/ui/select";
import { ChevronDownIcon } from "@/components/ui/icon";

const Row = ({
  title,
  subtitle,
  right,
}: {
  title: string;
  subtitle?: string;
  right: React.ReactNode;
}) => (
  <HStack className="justify-between items-center py-3">
    <VStack className="flex-1 pr-4">
      <Text bold className="text-foreground">{title}</Text>
      {subtitle ? (
        <Text size="xs" className="text-muted-foreground">{subtitle}</Text>
      ) : null}
    </VStack>
    {right}
  </HStack>
);

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("en");

  return (
    <Box className="flex-1 bg-background px-4 pt-6">
      <Heading size="2xl" className="mb-4">Settings</Heading>

      <VStack className="rounded-xl border border-border bg-card px-4">
        <Row
          title="Notifications"
          subtitle="Receive push notifications"
          right={
            <Switch
              value={notifications}
              onToggle={() => setNotifications(!notifications)}
            />
          }
        />
        <Divider />
        <Row
          title="Dark mode"
          subtitle="Use a darker theme"
          right={
            <Switch
              value={darkMode}
              onToggle={() => setDarkMode(!darkMode)}
            />
          }
        />
        <Divider />
        <Row
          title="Language"
          right={
            <Select selectedValue={lang} onValueChange={setLang}>
              <SelectTrigger className="w-[140px]">
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
            </Select>
          }
        />
      </VStack>

      <Button
        action="negative"
        variant="outline"
        className="mt-6"
        onPress={() => {}}
      >
        <ButtonText>Log out</ButtonText>
      </Button>
    </Box>
  );
}`,
  },
];
