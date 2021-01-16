import { Finger, FingerCurl, FingerDirection } from 'fingerpose/src/FingerDescription';
import GestureDescription from 'fingerpose/src/GestureDescription';


// describe rock gesture
const paperDescription = new GestureDescription('paper');

// all fingers:
// - no curled
// - horizontal/vertical left or right
for(let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    paperDescription.addCurl(finger, FingerCurl.NoCurl, 1.0);
    paperDescription.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
    paperDescription.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
    paperDescription.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

export default paperDescription;