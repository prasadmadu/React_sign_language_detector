import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe victory gesture ✌️
const yesDescription = new GestureDescription('yes');


// thumb:
yesDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
yesDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
yesDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
yesDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
yesDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
yesDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
yesDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// middle:
yesDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
yesDescription.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
yesDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.75);

// ring:
yesDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
yesDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.2);
yesDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
yesDescription.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// pinky:
yesDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
yesDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.2);
yesDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
yesDescription.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);

// give additional weight to index and ring fingers
yesDescription.setWeight(Finger.Index, 2);
yesDescription.setWeight(Finger.Middle, 2);

export default yesDescription;
