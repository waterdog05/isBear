#include <stdio.h>
#include <string.h>

int main() {
	char bear[10] = "고민재";
	char name[10] = "";
	int result;

	printf("이름을 입력하세요 : ");
	scanf("%s", name);

	result = strcmp(name, bear);
	
	if (result == 0) {
		printf("곰입니다.");
	}
	else {
		printf("사람입니다.");
	}

	return 0;
}
