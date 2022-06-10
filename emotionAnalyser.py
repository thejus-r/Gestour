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
    emo = text2emotion.get_emotion(text)
    emotion = max(zip(emo.values(), emo.keys()))[1]
    emo['genre'] = emotionToGenre[emotion]
    emo = json.dumps(emo)

    print(emo)


if __name__ == '__main__':
    main()
