# Circular_progress_bar

a simple jQuery plugin ---  dynamic loading progress bar

## screenshot
![](images/circular_progress_bar.PNG)

## how to use
1. js파일, css파일 다운
2. progress-bar를 class로 한 div를 만들고 data-percent에 원하는 값 입력.
3. 스크립트 호출

#### demo
``` javascript

	<div class="progress-bar" data-percent="70"></div>
	<script>
		$(".progress-bar").loading();
	</script>

```

* 변경 가능한 태그 속성 (입력하지 않으면 default값으로 표시됩니다)
	* data-percent 
	``` html

		<div class="progress-bar" data-percent="70"></div>

	```
	* data-color
	``` html

		<div class="progress-bar" data-color="#f7f7f7 #5b84c1"></div>

	```
	>data-color에서 첫 번째는 background 색상이고, 두 번째는 progress 색상입니다
