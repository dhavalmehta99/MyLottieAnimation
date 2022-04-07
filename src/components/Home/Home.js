import React, { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LottieView from 'lottie-react-native';


const Home = () => {

    const [isSmiled, setIsSmiled] = useState(false);
    const animationStar = useRef(null);
    const animationCompleteOrder = useRef(null);

    useEffect(() => {
        if (isSmiled) {
            // animationStar.current.play(79, 79)
            animationStar.current.play(19, 79)
        } else {
            // animationStar.current.play(19, 19)
            animationStar.current.play(41, 16)
        }
    }, [isSmiled]);

    const onPressStarToggleAnimation = () => {
        if (animationStar) {
            setIsSmiled(!isSmiled)
        }
    }

    const onPressCompleteOrderAnimation = () => {
        animationCompleteOrder.current.play()
    }


    return (
        <>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text
                    testID="label"
                    style={{
                        fontSize: 32,
                        fontWeight: 'bold'
                    }}>Lottie Animation</Text>

                {/* Star Animation View - TOGGLE */}
                <View>
                    <View style={{
                        // backgroundColor: 'yellow',
                        height: 200,
                        width: 200,
                        marginTop: 15
                    }}>
                        <LottieView
                            testID="starLottie"
                            ref={animationStar}
                            source={require('../../LottieFiles/lottie_star.json')}
                            autoPlay={false}
                            loop={false}
                        />
                    </View>
                    <TouchableOpacity
                        testID={'smileEmojiButton'}
                        onPress={onPressStarToggleAnimation}
                        accessibilityLabel="smileEmojiButton"
                        style={{
                            backgroundColor: '#666',
                            paddingHorizontal: 20,
                            paddingVertical: 5,
                            borderRadius: 10,
                            alignSelf: 'center'
                        }}>
                        <Text
                            style={{
                                color: '#FFF'
                            }}>Make Emoji to {isSmiled ? 'SLEEP' : 'SMILE'}</Text>
                    </TouchableOpacity>
                </View>
                {/* Star Animation View - TOGGLE - Over */}

                {/* Order Complete Animation */}
                <View>
                    <View style={{
                        // backgroundColor: 'yellow',
                        height: 200,
                        width: 200,
                        marginTop: 15
                    }}>
                        <LottieView
                            ref={animationCompleteOrder}
                            source={require('../../LottieFiles/lottie_done.json')}
                            autoPlay={false}
                            loop={false}
                            onAnimationFinish={
                                () => {
                                    console.log('Order Complete Animation is OVER')
                                    animationCompleteOrder.current.reset()
                                }
                            }
                        />
                    </View>
                    <TouchableOpacity
                        onPress={onPressCompleteOrderAnimation}
                        style={{
                            backgroundColor: '#666',
                            paddingHorizontal: 20,
                            paddingVertical: 5,
                            borderRadius: 10,
                            alignSelf: 'center'
                        }}>
                        <Text
                            style={{
                                color: '#FFF'
                            }}>Complete Order</Text>
                    </TouchableOpacity>
                </View>
                {/* Star Animation View - TOGGLE - Over */}
            </View>
        </>
    )
}

export default Home;
