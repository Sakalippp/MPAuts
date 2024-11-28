import React from 'react';
import { Text, View, Image } from 'react-native';

const MateriFlexBox = () => {
  return (
    <View>
      {/* Baris kotak dengan Flexbox */}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#ee5253',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ backgroundColor: '#00FF00', width: 50, height: 50 }} />
        <View style={{ backgroundColor: '#feca57', width: 50, height: 50 }} />
        <View style={{ backgroundColor: '#feca57', width: 50, height: 50 }} />
        <View style={{ backgroundColor: '#00FFFF', width: 50, height: 50 }} />
      </View>

      {/* Baris menu navigasi */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>

      {/* Profil Section */}
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
        <Image
          source={{
            uri: 
            'https://id.pinterest.com/pin/5277724556675674/'
          }}
          style={{ width: 100, height: 100, borderRadius: 50, marginRight: 14 }}
        />
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>pacar saka</Text>
          <Text>2jt  subscriber</Text>
        </View>
      </View>
    </View>
  );
};

export default MateriFlexBox;
