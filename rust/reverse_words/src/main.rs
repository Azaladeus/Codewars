fn reverse_words(str: &str) -> String {
    let word_vec: Vec<&str> = str.split(" ").collect();
    let mut new_word_vec: Vec<String> = vec![];
    
    for i in 0..word_vec.len() {
        new_word_vec.push(word_vec[i].chars().rev().collect::<String>());
    }

    let words: String = new_word_vec.join(" ");

    words
}

fn main() {
    println!("{}", reverse_words("The quick brown fox jumps over the lazy dog."));
}