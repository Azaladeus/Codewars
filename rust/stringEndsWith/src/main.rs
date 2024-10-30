fn solution(word: &str, ending: &str) -> bool {
    if ending == "" {
        true
    } else if word.ends_with(ending) {
        true
    } else {
        false
    }
}

fn main() {
    println!("{}", solution("abc", "c"));
}