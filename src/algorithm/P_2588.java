package algorithm;

import java.util.Scanner;

public class P_2588 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		
		int a = s.nextInt();
		int b = s.nextInt();
		
		System.out.println(a * (b % 10));		// 1의 자리
		System.out.println(a * ((b% 100) / 10));	// 10의 자리 (100으로 나눈나머지값에 10으로 나눈 몫)
		System.out.println(a * (b / 100));		// 100의 자리 
		System.out.println(a *  b);

	}

}
