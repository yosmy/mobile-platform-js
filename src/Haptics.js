import * as Haptics from 'expo-haptics';

const haptics = {
    impact: (style) => {
        return Haptics.impactAsync(style);
    },
    LIGHT: Haptics.ImpactFeedbackStyle.Light,
    MEDIUM: Haptics.ImpactFeedbackStyle.Medium,
    HEAVY: Haptics.ImpactFeedbackStyle.Heavy,
}

export default haptics;