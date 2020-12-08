import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe victory gesture ✌️
const testDescription = new GestureDescription('test');


// thumb:
testDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
testDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
testDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
testDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
testDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
testDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);
testDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, .2);

// middle:
testDescription.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
testDescription.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.2);
testDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1);

// ring:
testDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
testDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.2);
testDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
testDescription.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// pinky:
testDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
testDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.2);
testDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
testDescription.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);

// give additional weight to index and ring fingers
testDescription.setWeight(Finger.Index, 2);

export default testDescription;