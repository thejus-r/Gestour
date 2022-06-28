import json
import sys
import text2emotion


def main():

    emotionToGenre = {
        "Happy": "Comedy",
        "Angry": "Adventure",
        "Surprise": "Fantasy",
        "Sad": "Animation",
        "Fear": "Family"
    }

    text = sys.argv[1]
    # text = "I was in the garage, and across the street the neighbor was watering his grass. I’ve known him since I was born, forty years. I used to go to school with his youngest kid. The man is probably in his early eighties or late seventies. He’s in a wheelchair because of complications with his kidneys, at least I think that’s the reason. He reminds me of my dad, right before my dad died of cancer. My dad got really skinny like the way the neighbor is right now. I look at the neighbor from inside the garage and wish that I had a decent face so that I could go talk to him. You know? Like shoot the shit. He used to shoot the shit with my dad when my dad would be outside cutting the grass. None of the neighbors do that with me when I’m mowing the lawn because I’m too fucking ugly to carry on the tradition of chit chat."
    emo = text2emotion.get_emotion(text)
    emotion = max(zip(emo.values(), emo.keys()))[1]
    emo['genre'] = emotionToGenre[emotion]
    emo = json.dumps(emo)


if __name__ == '__main__':
    main()
