#pragma strict
var animator : Animator;
function Start () {
animator = GetComponent(Animator);
}

function Update () {
	if(Input.GetKeyDown(KeyCode.Space)){
	ManJump();
	}
}
function ManJump(){
	animator.SetBool("jumping",true);
	yield WaitForSeconds(1);
	animator.SetBool("jumping",false);
	animator.Play("main");
}