import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const Story = (props: { gambar: string; judul: string }) => {
  return (
    <View style={{ alignItems: 'center', marginRight: 20 }}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
      />
      <Text style={{ maxWidth: 50, textAlign: 'center' }}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Materi Component Dinamis dengan Props</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.storyWrapper}>
          <Story
            judul="Capcut"
            gambar="https://i.pinimg.com/236x/fa/eb/26/faeb26296ac3da247c135bbd4f3c78cf.jpg"
          />
          <Story
            judul="Facebook"
            gambar="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          />
          <Story
            judul="Mekdi"
            gambar="https://i.pinimg.com/236x/f5/8e/7c/f58e7c41d008e68d35c2fcff2f08b7e3.jpg"
          />
          <Story
            judul="Discord"
            gambar="https://i.pinimg.com/736x/6a/69/2c/6a692ce6af603e98e05ac41c815457e5.jpg"
          />
          <Story
            judul="TikTok"
            gambar="https://upload.wikimedia.org/wikipedia/en/6/6e/TikTok_logo.svg"
          />
          <Story
            judul="Snapchat"
            gambar="https://upload.wikimedia.org/wikipedia/en/a/ad/Snapchat_logo.svg"
          />
          <Story
            judul="Pinterest"
            gambar="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
          />
          <Story
            judul="YouTube"
            gambar="https://upload.wikimedia.org/wikipedia/commons/9/9f/YouTube_Logo_%282013-2017%29.png"
          />
          <Story
            judul="Oreo"
            gambar="https://i.pinimg.com/236x/90/6f/e0/906fe071c5833ceb7a443437ff269056.jpg"
          />
          <Story
            judul="Telegram"
            gambar="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
          />
          <Story
            judul="Weeb Toon"
            gambar="https://i.pinimg.com/236x/e6/a9/94/e6a99490ee8147914c152524d4fc16e6.jpg"
          />
          <Story
            judul="Netflix"
            gambar="https://i.pinimg.com/736x/0c/cc/0a/0ccc0ad61d6a1b18f7d53e636ba0979c.jpg"
          />
          
          
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  storyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PropsDinamis;
