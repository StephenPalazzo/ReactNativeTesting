import { View, Text} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
    return (
        <SafeAreaView>
            <Text>Hello World</Text>
        </SafeAreaView>
    )
}

export default Home;