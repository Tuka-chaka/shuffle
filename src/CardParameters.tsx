import { LiaDrumSolid, LiaPenSolid } from "react-icons/lia";
import { PiFaders, PiPianoKeysFill, PiGuitar, PiMusicNote } from "react-icons/pi";

export const CardParameters = [
    {
        icon: <LiaPenSolid/>,
        tags: 'lyrics (or absence thereof) / emotion / rhyme scheme / central theme / structure / musical storytelling / lyrics (or absence thereof) / emotion / rhyme scheme / central theme / structure / musical storytelling / '
    },
    {
        icon: <PiGuitar/>,
        tags: 'arrangement / instruments / genre staples / texture / interplay of parts / sparse or dense? / any weird sounds? / arrangement / instruments / genre staples / texture / interplay of parts / sparse or dense? / any weird sounds? / '
    },
    {
        icon: <PiMusicNote/>,
        tags: 'melody / scales / steps and leaps / consonant or dissonant? / melodic rhythm / melody / scales / steps and leaps / consonant or dissonant? / melodic rhythm / '
    },
    {
        icon: <LiaDrumSolid/>,
        tags: 'rhythm / drum sounds / percussion / pulse / feel / tempo / electronic or acoustic? / drum fills / rhythm / drum sounds / percussion / pulse / feel / tempo / electronic or acoustic? / drum fills / '
    },
    {
        icon: <PiPianoKeysFill/>,
        tags: 'harmony / harmonic rhythm / key changes / tension and release / common chord progressions / simple or complex? / harmony / harmonic rhythm / key changes / tension and release / common chord progressions / simple or complex? / '
    },
    {
        icon: <PiFaders/>,
        tags: 'production / studio tricks / effects / sound synthesis / timbral manipulation / clean or lo-fi? / modern or dated? / production / studio tricks / effects / sound synthesis / timbral manipulation / clean or lo-fi? / modern or dated? / '
    },
]