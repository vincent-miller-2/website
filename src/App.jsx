import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SideBar from './components/Sidebar';
import About from './components/About';
import Work from './components/Work';
import './App.scss';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/vincent-miller-2')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setUser(json);
      });
  }, []);

  // console.log(n);
  //   const chars = n.toString().split('');
  //   let i = chars.length-1;
  //   while(i > 0) {
  //     if (chars[i]>chars[i-1]) break;
  //     i -= 1;
  //   }
  //   if (i === 0) return -1;
  //   const suf = chars.splice(i).sort();
  //   const t = chars[chars.length-1];
  //   for (i = 0; i < suf.length; i += 1) {
  //     if (suf[i] > t) break;
  //   }
  //   chars[chars.length-1] = suf[i]
  //   suf[i] = t;
  //   const res = chars.concat(suf);
  //   const num = parseInt(res.join(''));
  //   console.log("->" +num);
  //   return num;
  // 21581957621

  // const result = [];

  //   if (array.length === 0) {
  //     return [[]];
  //   }

  //   while (array.length > 0) {
  //     result.push(...array.shift());

  //     for (let i = 0; i < array.length; i += 1) {
  //       result.push(array[i].pop());
  //     }

  //     result.push(...(array.pop() || []).reverse());

  //     for(let i = array.length - 1; i >= 0; i -= 1 ){
  //       result.push(array[i].shift())
  //     }
  //   }

  //   return result;

  // let highest = 0;
  //   let current = 0;

  //   if (array.length === 0) {
  //     return 0;
  //   }
    
  //   for (let i = 0; i < array.length; i += 1) {
  //     current = array[i] + current;

  //     if (current > highest) {
  //       highest = current;
  //     }

  //     if (current < 0) {
  //       current = 0;
  //     }
  //   }

  //   return highest;

  // const binarySearch = (arr, target) => {
  //   let start = 0;
  //   let end = arr.length - 1;

  //   console.log(`Searching for value ${target}`);

  //   while (start <= end) {
  //     const middle = Math.floor((start + end) / 2);
  //     console.log(`Middle value is ${arr[middle]}`);

  //     if (target === arr[middle]) {
  //       console.log(`Target found at index ${middle}`);
  //       break;
  //     } else if (target > arr[middle]) {
  //       console.log(`Searching right side of array`);
  //       start = middle + 1;
  //       console.log(`Start now is ${arr[start]}`);
  //       console.log(`End now is ${arr[end]}`);
  //     } else if (target < arr[middle]) {
  //       console.log('Searching left side of array');
  //       end = middle - 1;
  //       console.log(`Start now is ${arr[start]}`);
  //       console.log(`End now is ${arr[end]}`);
  //     } else {
  //       break;
  //     }
  //   }

  //   if (start >= end) {
  //     console.log("Target value not found in array");
  //   }
  // }

//   function sortString(s) {
//     return s.split("").sort().join("");
// }

  // var sortedStr = sortString(s);
    
  //   for(var i=1;i<100;i++){
  //     var tempStr = "";
  //     for(var j=i;j<i+n;j++){
  //         tempStr += j;
  //     }
  //     if(tempStr.length === s.length){
  //         if(sortString(tempStr) === sortedStr){
  //             var start = i;
  //             var end = i + n - 1;
  //             if(s.indexOf(start) >= 0 && s.indexOf(end) >= 0){
  //                 return [start, end];
  //             }
  //         }
  //     }

  // const swap = (arr, i, j) => {
  //   console.log(`Swap start ${arr}`);
  //   const temp = arr[i];
  //   console.log(`Swapping ${arr[i]} with ${arr[j]}`)
  //   arr[i] = arr[j];
  //   arr[j] = temp;
  //   console.log(`Swap end ${arr}`);
  // }

  // const partition = (arr, left, right) => {
  //   const pivot  = Math.floor((left + right) / 2);

  //   while (left < right) {
  //     while (arr[left] < arr[pivot]) {
  //       left += 1;
  //     }

  //     while (arr[right] > arr[pivot]) {
  //       right -= 1;
  //     }

  //     if (left <= right) {
  //       swap(arr, left, right);
  //       left += 1;
  //       right -= 1;
  //     }
  //   }

  //   return left;
  // }

  // const quickSort = (arr, left, right) => {
  //   console.log(`Start ${arr}`);
  //   const pivot = partition(arr, left, right);
  //   console.log(pivot);

  //   if (left < pivot - 1) {
  //     quickSort(arr, left, pivot -1);
  //   }

  //   if (right > pivot) {
  //     quickSort(arr, pivot, right);
  //   }

  //   console.log(`End ${arr}`);
  //   return arr;
  // }

  // Merge the two arrays: left and right
  // const merge = (left, right, i) => {
    
  //   let resultArray = [], leftIndex = 0, rightIndex = 0;

  //   // We will concatenate values into the resultArray in order
  //   while (leftIndex < left.length && rightIndex < right.length) {
  //     if (left[leftIndex] < right[rightIndex]) {
  //       console.log(`Pushing left at ${left[leftIndex]} ${i}`)
  //       resultArray.push(left[leftIndex]);
  //       leftIndex += 1; // move left array cursor
  //     } else {
  //       console.log(`Pushing right at ${right[rightIndex]} ${i}`)
  //       resultArray.push(right[rightIndex]);
  //       rightIndex += 1; // move right array cursor
  //     }
  //   }

  //   // We need to concat here because there will be one element remaining
  //   // from either left OR the right
  //   const res = resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  //   console.log(`Res:${res} ${i}`);
  //   return res;
  // }

  // const mergeSort = (arr, i) => {
  //   // No need to sort the array if the array only has one element or empty
  //   if (arr.length <= 1) {
  //     return arr;
  //   }
  //   // In order to divide the array in half, we need to figure out the middle
  //   const middle = Math.floor(arr.length / 2);

  //   // This is where we will be dividing the array into left and right
  //   const left = arr.slice(0, middle);
  //   const right = arr.slice(middle);
  //   console.log(`${left} + ${i}`);
  //   console.log(`${right} + ${i}`);

  //   // Using recursion to combine the left and right
  //   return merge(mergeSort(left, i += 1), mergeSort(right, i += 1), i);
  // }

 

  const challenge = (array) => {
    const result = [];

    if (array.length === 0) {
      return [[]];
    }

    while (array.length > 0) {
      result.push(...array.shift());

      for (let i = 0; i < array.length; i += 1) {
        result.push(array[i].pop());
      }

      result.push(...(array.pop() || []).reverse());

      for(let i = array.length - 1; i >= 0; i -= 1 ){
        result.push(array[i].shift())
      }
    }

    return result;
  }


  // const arr = [ 21, 43, 11, 98, 86, 81, 26, 56 ];
  // 1:eee/1:iii/2:yyy/1:ff/1:mm/1:qq/1:xx/2:cc/2:pp/2:ss/=:oo

  if (!user) {
    return <div />
  }

  return (
    <Router>
        <main className="App">
        <SideBar />
        <button type="button" onClick={() => challenge([[1,2,3,4,5],[6,7,8,9,10],[1,2,3,4,5],[6,7,8,9,10],[1,2,3,4,5]])}>Run function</button> 
      </main>

      <Switch>
          <Route exact path='/' render={() => <About user={user} />} />
          <Route path='/work' render={() => <Work work={user.work} />} />
        </Switch>
    </Router>
  );
}

export default App;
