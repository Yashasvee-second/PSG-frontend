import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
// layout will be present in every file

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        {/* removed justify-center */}
        <View className="w-full  items-center  min-h-[85vh] px-4 justify-between">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[84px]"
          ></Image>

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          ></Image>

          <View className="relative mt-5">
            <Text className="text-white text-3xl font-bold text-center">
              Sign in to start saving lives with {"  "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[150px] h-[14px] absolute top-16 right-14"
              resizeMode="contain"
            />
          </View>

          <Text className="text-white text-sm font-pregular text-gray-300 text-center mt-10">
            Innovation Unlocked
          </Text>

          <CustomButton
            title="Continue with email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-10"
          ></CustomButton>
        </View>
      </ScrollView>

      <StatusBar style="light" backgroundColor="#161622" />
    </SafeAreaView>
  );
}

// replaced by tailwindcss
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
