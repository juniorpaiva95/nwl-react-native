import { colors } from "@/styles/theme";
import { View, Text } from "react-native";
import { s } from "./styles";
import { IconProps, IconQrcode } from "@tabler/icons-react-native";

type Props = {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
};

export function Step({ title, description, icon: Icon }: Props) {
  return (
    <View style={s.container}>
      {Icon && <Icon size={32} color={colors.red.base}></Icon>}

      <View style={s.details}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  );
}
