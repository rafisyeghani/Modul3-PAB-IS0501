import React from 'react';
import { Modal, StyleSheet, Text, Pressable, View, Image, ScrollView } from 'react-native';

const modal = ({ visible, article, onClose }) => {
    if (!article) return null;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Image source={{ uri: article.image }} style={styles.modalImage} />
                        <Text style={styles.modalTitle}>{article.title}</Text>
                        <Text style={styles.modalText}>
                            Ini adalah penerapan modal dari tugas praktikum 3. Dimana list berita jika di klik maka akan muncul modal seperti ini
                        </Text>
                    </ScrollView>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={onClose}>
                        <Text style={styles.textStyle}>Tutup</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        maxHeight: '80%',
        width: '90%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 15,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'left',
        color: '#333',
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'justify',
        lineHeight: 24,
        color: '#666',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        alignSelf: 'center',
        minWidth: 150,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default modal;