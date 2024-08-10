import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">RN and nativewind template</Text>
      <View className="flex-row items-center justify-between w-full px-6">
      <TouchableOpacity onPress={() => router.push("/profile")}>
        <Text className="px-3 py-1 bg-black rounded-full text-white">
          Go to Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/settings")}>
        <Text className="px-3 py-1 bg-black rounded-full text-white">
          Go to Settings
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
