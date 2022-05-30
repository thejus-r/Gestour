import text2emotion
import json


def main():
    text = "I am Happy and Sad"
    emo = text2emotion.get_emotion(text)
    emotion = max(zip(emo.values(), emo.keys()))[1]
    emo['emotion'] = emotion
    print(emo)


if __name__ == '__main__':
    main()
