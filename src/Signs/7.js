import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
// import GestureDescription from '../GestureDescription';


// describe easy gesture
const sevenDescription = new GestureDescription('seven');


// thumb:
// sevenDescription.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
// sevenDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
sevenDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
// sevenDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
// sevenDescription.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);
// sevenDescription.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
sevenDescription.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
// sevenDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
// sevenDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
// sevenDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 1.0);
// sevenDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 1.0);

// index:
// sevenDescription.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
// sevenDescription.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
sevenDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
sevenDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
// sevenDescription.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);
// sevenDescription.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
// sevenDescription.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
// sevenDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
// sevenDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
// sevenDescription.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 1.0);
// sevenDescription.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 1.0);

// middle:
sevenDescription.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
// sevenDescription.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
// sevenDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
// sevenDescription.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
// sevenDescription.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);
// sevenDescription.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
// sevenDescription.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);
sevenDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
// sevenDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
// sevenDescription.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 1.0);
// sevenDescription.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 1.0);

// ring:
sevenDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
// sevenDescription.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
// sevenDescription.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
sevenDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
// sevenDescription.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);
// sevenDescription.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);
// sevenDescription.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);
// sevenDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
// sevenDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
// sevenDescription.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 1.0);
// sevenDescription.addDirection(Finger.Ring, FingerDirection.DiagonalDownLeft, 1.0);

// pinky:
sevenDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
// sevenDescription.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
// sevenDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
sevenDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
// sevenDescription.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);
// sevenDescription.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);
// sevenDescription.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);
// sevenDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
// sevenDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
// sevenDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 1.0);
// sevenDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 1.0);


export default sevenDescription;