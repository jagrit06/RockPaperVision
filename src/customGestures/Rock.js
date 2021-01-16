import { Finger, FingerCurl, FingerDirection } from 'fingerpose/src/FingerDescription';
import GestureDescription from 'fingerpose/src/GestureDescription';


// describe rock gesture
const rockDescription = new GestureDescription('rock');

// all fingers:
// - curled
// - horizontal left or right
for(let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  rockDescription.addCurl(finger, FingerCurl.FullCurl, 1.0);
  rockDescription.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
  rockDescription.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
  rockDescription.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}

export default rockDescription;