var explosionPrefab : GameObject;
var colorName : String;

private var damaged : boolean;
private var killTimer : float;

function ApplyDamage() {
  if (!damaged) {
    damaged = true;
    killTimer = 0.4;
    rigidbody.AddForce(Vector3.up * 15.0, ForceMode.Impulse);
  }
}

function Update () {
  if (!damaged) return;
  killTimer -= Time.deltaTime;
  if (killTimer <= 0.0) {
    var gameController : GameObject = GameObject.FindWithTag("GameController");
    gameController.SendMessage("OnDestroyBox", colorName);
    Instantiate(explosionPrefab, transform.position, transform.rotation);
    Destroy(gameObject);
  }
}