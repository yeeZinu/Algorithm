package algorithm;

import java.util.Scanner;

public class P_9498 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner s = new Scanner(System.in);
		
		int a = s.nextInt();
		
		if (100 >= a && a >= 90) {
			System.out.println("A");
		}
		else if (90 > a && a >= 80) {
			System.out.println("B");
		}
		else if (80 > a && a >= 70) {
			System.out.println("C");
		}
		else if (70 > a && a >= 60) {
			System.out.println("D");
		}
		else {
			System.out.println("F");
		}

	}

}

/*	백준 자바 숏코딩 (조건부연산자 ?를 사용해서 한줄에 끝내는 방법)
 *  
 *  조건부연산자 ?
 *  조건문?true:false
 *  
 * 	interface Main{
 * 		static void main(String[]a){
 * 		int A=new java.util.Scanner(System.in).nextInt()/10;
 * 		System.out.print(A>8?"A":A>7?"B":A>6?"C":A>5?"D":"F");
 * 		}
 * 	}*/
