import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-paper";

export default function CreatePost() {
  const [image, setImage] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [locationName, setLocationName] = useState("");
  const [geolocation, setGeolocation] = useState("");
  const [lostDate, setLostDate] = useState("");

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (!image || !description || !category || !locationName || !geolocation || !lostDate) {
      Alert.alert("Please fill in all fields.");
      return;
    }

    // 🔗 Hook this to Appwrite DB storage + document creation logic here

    Alert.alert("Post created successfully!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📸 Create Lost Item Post</Text>

      {/* Image Upload */}
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.uploadText}>Tap to upload image</Text>
        )}
      </TouchableOpacity>

      {/* Input Fields */}
      <TextInput
        placeholder="Item Description"
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        placeholder="Category (e.g., Wallet, Phone)"
        style={styles.input}
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        placeholder="Location Name"
        style={styles.input}
        value={locationName}
        onChangeText={setLocationName}
      />
      <TextInput
        placeholder="Geolocation (latitude, longitude)"
        style={styles.input}
        value={geolocation}
        onChangeText={setGeolocation}
      />
      <TextInput
        placeholder="Date & Time Lost (e.g., 2024-06-01 10:30 AM)"
        style={styles.input}
        value={lostDate}
        onChangeText={setLostDate}
      />

      {/* Submit */}
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Submit Post
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 16,
  },
  imagePicker: {
    width: 200,
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  uploadText: {
    color: "#888",
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
    width: "100%",
  },
});
