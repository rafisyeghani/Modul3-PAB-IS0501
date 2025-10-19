import React, { useState } from "react";
import {
    FlatList, Image,
    Text,
    TouchableOpacity, View,
    StyleSheet,
} from "react-native";
import Modal from "../components/modal";

// Dummmy Data (Array of Object)
const datas = [
    {
        id: 1, 
        title:
            "Program Studi Sistem Informasi Telkom University Surabaya kembali mengadakan kegiatan “SI BERBAGI”",
        image:

            "https://bis-sby.telkomuniversity.ac.id/wp-content/uploads/2024/03/IMG_4618-1-2048x1536.jpeg",
    },
    {
        id: 2,
        title: "Tel-U Surabaya Gelar Sosialisasi Bandung Techno Park",
        image:

            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/kekayaan-intelektual-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 3, title:
            "Soft Launching dan Pengenalan Laboratorium Motion di Telkom University Surabaya",
        image:

            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/motion-capture-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 4,
        title: "Tingkatkan Kualitas Pengelolaan Jurnal Ilmiah: Telkom University Surabaya Gelar Workshop Migrasi Web Jurnal",
        image:

            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/05/workshop-migrasi-web-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 5, title:
            "Menggali Potensi Desa: Telkom University Surabaya Mendukung UMKM di Tambak Kalisogo",
        image:

            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/03/Telkom-University-Surabaya-2-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 6, title:
            "Telkom University Surabaya Hadirkan Inovasi Pengganti Bantalan Roda Semiotonom Tank Leopard berbasis Electric Forklift Khusus untuk Penguatan Alutsista TNI",
        image:

            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/bfi_thumb/tank-leopard-7dnkdoqfkgh7et7l6q0j1odu6ovt6cavmgnig3e1368.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 7,
        title: "Sosialisasi PKM 2024 Bersama Tim Pemenangan Tel-U Surabaya", image:

            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/02/pkm-2024-1-1200x600.jpeg?lossy=2&strip=1&webp=1",
    },
    {
        id: 8, title:
            "Transformasi Digital Al-Barra Studio Melalui Pembuatan Website oleh Institut Teknologi Telkom Surabaya",
        image:

            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/11/transformasi-digital.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 9,
        title: "Program Pengabdian Masyarakat Telkom University Surabaya Bantu UMKM Desa Panjunan Go Digital dan Raih Pasar Internasional",
        image:

            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/09/umkm-go-digital-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
    {
        id: 10, title:
            "Workshop Social Media Marketing dari INDIBIZ Memberdayakan Pedagang Lokal",
        image:

            "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/07/social-media-marketing-1-1200x600.jpg?lossy=2&strip=1&webp=1",
    },
];

// Functional Component
const List = () => {

    //untuk nyimpen artikel yg dipilih
    const [selectArticle, setSelectArticle] = useState(null);
    //untuk ngatur modal keliatan atau nggak
    const [modalVisible, setModalVisible] = useState(false);
    
    // Arrow Function with destructured argument
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.view} onPress={() => {
                setSelectArticle(item);
                setModalVisible(true);
            }}>
                <View>
                    <Image 
                        source={{ uri: item.image }} 
                        style={styles.image}
                    />
                    <Text style={styles.text}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={datas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={styles.flatList}
            />
            <Modal
                visible={modalVisible}
                article={selectArticle}
                onClose={() => setModalVisible(false)}
            />
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    flatList: {
        flex: 1,
    },
    view: {
        padding: 15,
        borderBottomColor: "#dddddd", 
        borderBottomWidth: 1,
    },
    image: {
        height: 200, 
        width: '100%',
        resizeMode: 'cover',
    },
    text: {
        fontSize: 18,
        paddingTop: 10,
        color: '#333',
    },
});

export default List;
