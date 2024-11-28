fn spin_words(words: &str) -> String {
    let new_words_vec: Vec<&str> = words.split(" ").collect();
    let mut reversed: Vec<String> = vec![];
    for i in 0..new_words_vec.len() {
        if new_words_vec[i].len() >= 5 {
            reversed.push(new_words_vec[i].chars().rev().collect::<String>());
        } else {
            reversed.push(new_words_vec[i].to_string());
        }
    }

    reversed.join(" ")
}

fn main() {
    println!("{}", spin_words("Hey fellow warriors"));
}
